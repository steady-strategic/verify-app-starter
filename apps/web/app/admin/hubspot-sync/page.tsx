"use client";

import { useState } from "react";

export default function HubSpotSyncPage() {
    const [syncing, setSyncing] = useState(false);
    const [result, setResult] = useState<any>(null);

    const handleSync = async () => {
        setSyncing(true);
        setResult(null);

        try {
            const response = await fetch('/api/sync-hubspot', {
                method: 'POST',
            });

            const data = await response.json();
            setResult(data);
        } catch (error: any) {
            setResult({ error: error.message });
        } finally {
            setSyncing(false);
        }
    };

    return (
        <div className="min-h-screen bg-stone-50 p-8">
            <div className="max-w-2xl mx-auto">
                <h1 className="text-3xl font-bold text-stone-900 mb-6">
                    HubSpot Contact Sync
                </h1>

                <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <p className="text-stone-600 mb-4">
                        This tool syncs contact form submissions to HubSpot.
                        Submissions are automatically synced when created, but you can
                        manually trigger a sync here to retry any failed submissions.
                    </p>

                    <button
                        onClick={handleSync}
                        disabled={syncing}
                        className="bg-stone-900 hover:bg-stone-800 text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                        {syncing ? 'Syncing...' : 'Sync to HubSpot'}
                    </button>
                </div>

                {result && (
                    <div className={`rounded-lg p-6 ${result.error
                            ? 'bg-red-50 border border-red-200'
                            : 'bg-green-50 border border-green-200'
                        }`}>
                        <h2 className="font-bold text-lg mb-3">
                            {result.error ? 'Error' : 'Sync Results'}
                        </h2>

                        {result.error ? (
                            <p className="text-red-800">{result.error}</p>
                        ) : (
                            <div className="space-y-2 text-sm">
                                <p className="text-stone-700">
                                    <strong>Synced:</strong> {result.synced || 0} submissions
                                </p>
                                <p className="text-stone-700">
                                    <strong>Failed:</strong> {result.failed || 0} submissions
                                </p>
                                {result.message && (
                                    <p className="text-stone-600 italic">{result.message}</p>
                                )}
                                {result.errors && result.errors.length > 0 && (
                                    <div className="mt-4">
                                        <p className="font-semibold text-red-800 mb-2">Errors:</p>
                                        <ul className="list-disc list-inside space-y-1 text-red-700">
                                            {result.errors.map((error: string, i: number) => (
                                                <li key={i}>{error}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
