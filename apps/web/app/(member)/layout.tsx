import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";

export default async function MemberLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // DISABLED: Member account section disabled - redirecting to home page
    redirect("/");

    /* ORIGINAL CODE - DISABLED
    const session = await auth();

    // Not logged in - redirect to login
    if (!session?.user) {
        redirect("/login");
    }

    // Check if user is a member (not admin)
    const userType = (session.user as any).userType;
    if (userType !== "MEMBER") {
        redirect("/login");
    }

    return <>{children}</>;
    */
}
