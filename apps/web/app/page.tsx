import Link from "next/link";

export default function HomePage() {
    return (
        <div className="status-page">
            <div className="status-icon">🔐</div>
            <h1 className="status-title">Verify App</h1>
            <p className="status-description">
                Professional license verification system. Register to get started.
            </p>
            <div style={{ marginTop: "2rem" }}>
                <Link href="/signup">
                    <button className="submit-button">Get Started</button>
                </Link>
            </div>
        </div>
    );
}
