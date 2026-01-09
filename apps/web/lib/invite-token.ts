import crypto from "crypto";

/**
 * Generate a cryptographically secure random token
 * Returns a 64-character hex string (32 bytes)
 */
export function generateInviteToken(): string {
    return crypto.randomBytes(32).toString("hex");
}

/**
 * Hash a token using SHA-256 for secure storage
 * Always use this before storing tokens in the database
 */
export function hashToken(token: string): string {
    return crypto.createHash("sha256").update(token).digest("hex");
}

/**
 * Get token TTL in hours from environment or use default (24 hours)
 */
export function getTokenTTLHours(): number {
    const envTTL = process.env.INVITE_TOKEN_TTL_HOURS;
    return envTTL ? parseInt(envTTL, 10) : 24;
}

/**
 * Calculate expiration date for a new token
 */
export function getTokenExpirationDate(): Date {
    const ttlHours = getTokenTTLHours();
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + ttlHours);
    return expiresAt;
}
