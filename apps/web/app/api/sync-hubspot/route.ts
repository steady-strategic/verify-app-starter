import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

/**
 * HubSpot Contact Sync API Route
 * 
 * This endpoint syncs contact submissions to HubSpot.
 * Can be called manually or set up as a cron job.
 */
export async function POST(request: NextRequest) {
    try {
        const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

        if (!HUBSPOT_API_KEY) {
            return NextResponse.json(
                { error: "HubSpot API key not configured" },
                { status: 500 }
            );
        }

        // Get all unsynced submissions
        const unsyncedSubmissions = await prisma.contactSubmission.findMany({
            where: {
                syncedToHubspot: false,
            },
            orderBy: {
                createdAt: 'asc',
            },
        });

        if (unsyncedSubmissions.length === 0) {
            return NextResponse.json({
                success: true,
                message: "No submissions to sync",
                synced: 0,
            });
        }

        const results = {
            synced: 0,
            failed: 0,
            errors: [] as string[],
        };

        // Sync each submission to HubSpot
        for (const submission of unsyncedSubmissions) {
            try {
                // Step 1: Search for existing contact by email
                const searchResponse = await fetch(
                    `https://api.hubapi.com/crm/v3/objects/contacts/search`,
                    {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            filterGroups: [{
                                filters: [{
                                    propertyName: 'email',
                                    operator: 'EQ',
                                    value: submission.email
                                }]
                            }]
                        }),
                    }
                );

                const searchData = await searchResponse.json();
                let contactId: string;

                if (searchData.results && searchData.results.length > 0) {
                    // Contact exists - get the ID
                    contactId = searchData.results[0].id;

                    // Update existing contact (only update if fields are empty)
                    await fetch(
                        `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
                        {
                            method: 'PATCH',
                            headers: {
                                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                properties: {
                                    phone: submission.phone || '',
                                }
                            }),
                        }
                    );
                } else {
                    // Contact doesn't exist - create new one
                    const createResponse = await fetch(
                        'https://api.hubapi.com/crm/v3/objects/contacts',
                        {
                            method: 'POST',
                            headers: {
                                'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                properties: {
                                    firstname: submission.firstName,
                                    lastname: submission.lastName,
                                    email: submission.email,
                                    phone: submission.phone || '',
                                },
                            }),
                        }
                    );

                    if (!createResponse.ok) {
                        throw new Error(`Failed to create contact: ${await createResponse.text()}`);
                    }

                    const createData = await createResponse.json();
                    contactId = createData.id;
                }

                // Step 2: Create a note on the contact for this form submission
                const noteResponse = await fetch(
                    'https://api.hubapi.com/crm/v3/objects/notes',
                    {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            properties: {
                                hs_timestamp: new Date(submission.createdAt).getTime(),
                                hs_note_body: `**Form Submission: ${submission.formName}**\n\n` +
                                    `**Clinician Email:** ${submission.clinicianEmail}\n` +
                                    `**Message:**\n${submission.message}\n\n` +
                                    `**Contact Info:**\n` +
                                    `Name: ${submission.firstName} ${submission.lastName}\n` +
                                    `Email: ${submission.email}\n` +
                                    `Phone: ${submission.phone || 'N/A'}`,
                            },
                            associations: [{
                                to: { id: contactId },
                                types: [{
                                    associationCategory: 'HUBSPOT_DEFINED',
                                    associationTypeId: 202 // Note to Contact association
                                }]
                            }]
                        }),
                    }
                );

                if (noteResponse.ok) {
                    // Update submission as synced
                    await prisma.contactSubmission.update({
                        where: { id: submission.id },
                        data: {
                            syncedToHubspot: true,
                            hubspotContactId: contactId,
                        },
                    });

                    results.synced++;
                } else {
                    const errorText = await noteResponse.text();
                    console.error(`Failed to create note for submission ${submission.id}:`, errorText);
                    results.failed++;
                    results.errors.push(`Submission ${submission.id}: ${errorText}`);
                }
            } catch (error: any) {
                console.error(`Error syncing submission ${submission.id}:`, error);
                results.failed++;
                results.errors.push(`Submission ${submission.id}: ${error.message}`);
            }
        }

        return NextResponse.json({
            success: true,
            ...results,
        });
    } catch (error: any) {
        console.error("Error in HubSpot sync:", error);
        return NextResponse.json(
            { error: "Failed to sync to HubSpot", details: error.message },
            { status: 500 }
        );
    }
}
