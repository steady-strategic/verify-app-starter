#!/usr/bin/env node

/**
 * Test script for Contact Form Integration
 * 
 * Usage: node test-contact-form.js
 */

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

async function testContactForm() {
    console.log('🧪 Testing Contact Form Integration\n');

    const testData = {
        clinicianEmail: 'dr.smith@example.com',
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        phone: '555-1234',
        message: 'This is a test message from the automated test script.',
    };

    console.log('📝 Test Data:');
    console.log(JSON.stringify(testData, null, 2));
    console.log('\n');

    try {
        // Test 1: Submit contact form
        console.log('1️⃣  Testing form submission...');
        const submitResponse = await fetch(`${BASE_URL}/api/contact-clinician`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(testData),
        });

        if (!submitResponse.ok) {
            throw new Error(`Form submission failed: ${submitResponse.statusText}`);
        }

        const submitResult = await submitResponse.json();
        console.log('✅ Form submitted successfully');
        console.log(`   Submission ID: ${submitResult.submissionId}\n`);

        // Wait a moment for background sync
        console.log('⏳ Waiting 2 seconds for background HubSpot sync...\n');
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Test 2: Manual HubSpot sync (to ensure it worked)
        console.log('2️⃣  Testing HubSpot sync...');
        const syncResponse = await fetch(`${BASE_URL}/api/sync-hubspot`, {
            method: 'POST',
        });

        if (!syncResponse.ok) {
            throw new Error(`HubSpot sync failed: ${syncResponse.statusText}`);
        }

        const syncResult = await syncResponse.json();
        console.log('✅ HubSpot sync completed');
        console.log(`   Synced: ${syncResult.synced}`);
        console.log(`   Failed: ${syncResult.failed}`);

        if (syncResult.errors && syncResult.errors.length > 0) {
            console.log('\n⚠️  Errors:');
            syncResult.errors.forEach((error) => {
                console.log(`   - ${error}`);
            });
        }

        console.log('\n✨ All tests passed!\n');
        console.log('Next steps:');
        console.log('1. Check your database for the submission');
        console.log('2. Check HubSpot for the new contact');
        console.log('3. Visit http://localhost:3000/admin/hubspot-sync to view sync status\n');

    } catch (error) {
        console.error('\n❌ Test failed:', error.message);
        process.exit(1);
    }
}

testContactForm();
