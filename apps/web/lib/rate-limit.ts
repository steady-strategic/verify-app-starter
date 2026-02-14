type RateLimitOptions = {
    uniqueTokenPerInterval?: number;
    interval?: number;
};

// Global cache to persist across hot reloads in dev, 
// though serverless functions will reset this on cold starts.
const globalRateLimitMap = new Map<string, number[]>();

export default function rateLimit(options?: RateLimitOptions) {
    const interval = options?.interval || 60000;
    const uniqueTokenPerInterval = options?.uniqueTokenPerInterval || 500;

    return {
        check: (res: any, limit: number, token: string) =>
            new Promise<void>((resolve, reject) => {
                const now = Date.now();
                const timestamps = globalRateLimitMap.get(token) || [];

                // Filter timestamps within the current interval
                const timestampsInWindow = timestamps.filter(timestamp => now - timestamp < interval);

                // Update the token with valid timestamps only
                globalRateLimitMap.set(token, timestampsInWindow);

                if (timestampsInWindow.length >= limit) {
                    return reject(new Error('Rate limit exceeded'));
                }

                timestampsInWindow.push(now);
                globalRateLimitMap.set(token, timestampsInWindow);

                // Optional: Cleanup old tokens if map gets too large (basic implementation)
                if (globalRateLimitMap.size > uniqueTokenPerInterval) {
                    // In a real LRU we'd delete the oldest. 
                    // Here we rely on serverless environment recycling memory.
                }

                return resolve();
            }),
    };
}
