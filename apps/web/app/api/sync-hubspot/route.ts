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
        const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID || '243662289';
        const HUBSPOT_FORM_ID = process.env.HUBSPOT_FORM_ID || '54e4bb6a-b0f0-4595-9506-cc483ba0b97a';

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

        // Sync each submission to HubSpot Forms API
        for (const submission of unsyncedSubmissions) {
            try {
                // Submit to HubSpot Forms API (no auth needed)
                const hubspotResponse = await fetch(
                    `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            fields: [
                                { name: 'firstname', value: submission.firstName },
                                { name: 'lastname', value: submission.lastName },
                                { name: 'email', value: submission.email },
                                { name: 'phone', value: submission.phone || '' },
                                { name: 'form_name', value: submission.formName },
                                { name: 'clinician_email', value: submission.clinicianEmail },

                            ],
                            context: {
                                pageUri: 'https://more-website.com/directory',
                                pageName: 'Clinician Directory'
                            },
                            skipValidation: true,
                            legalConsentOptions: {
                                consent: {
                                    consentToProcess: true,
                                    text: 'I agree to allow this website to store and process my personal data.',
                                }
                            }
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
                            hubspotContactId: 'form-submitted',
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
