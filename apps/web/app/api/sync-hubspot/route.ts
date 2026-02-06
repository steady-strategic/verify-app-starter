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
                // Create contact in HubSpot with all properties
                const hubspotResponse = await fetch(
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
                                // Custom properties - must be created in HubSpot first
                                form_name: submission.formName,
                                clinician_email: submission.clinicianEmail,
                                message: submission.message,
                            },
                        }),
                    }
                );

                if (hubspotResponse.ok) {
                    const hubspotData = await hubspotResponse.json();

                    // Update submission as synced
                    await prisma.contactSubmission.update({
                        where: { id: submission.id },
                        data: {
                            syncedToHubspot: true,
                            hubspotContactId: hubspotData.id,
                        },
                    });

                    results.synced++;
                } else {
                    const errorText = await hubspotResponse.text();
                    console.error(`Failed to sync submission ${submission.id}:`, errorText);
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
