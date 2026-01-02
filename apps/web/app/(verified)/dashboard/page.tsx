import { auth } from "../../../lib/auth";

export default async function DashboardPage() {
    const session = await auth();
    const userName = session?.user?.name || "User";

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1 className="dashboard-title">Dashboard</h1>
                <span className="badge">
                    <span>✓</span>
                    Verified
                </span>
            </header>

            <div className="welcome-card">
                <h2 className="welcome-title">Welcome, {userName}!</h2>
                <p className="welcome-text">
                    Your account has been verified. You now have full access to the platform.
                </p>
            </div>
        </div>
    );
}
