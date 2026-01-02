import Link from "next/link";

export default function PendingPage() {
    return (
        <div className="status-page">
            <div className="status-icon">⏳</div>
            <h1 className="status-title">Verification Pending</h1>
            <p className="status-description">
                Thank you for registering! Your account is currently pending verification.
                You&apos;ll receive an email once your account has been reviewed.
            </p>
            <div style={{ marginTop: "2rem" }}>
                <Link href="/">Return Home</Link>
            </div>
        </div>
    );
}
