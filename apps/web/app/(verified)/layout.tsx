import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function VerifiedLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // Not logged in - redirect to signup
    if (!session?.user) {
        redirect("/signup");
    }

    const userId = (session.user as any).id as string;

    // Fetch current user status from database
    const user = await prisma.user.findUnique({
        where: { id: userId },
        select: { status: true },
    });

    // User not found - redirect to signup
    if (!user) {
        redirect("/signup");
    }

    // User not verified - redirect to pending
    if (user.status !== "VERIFIED") {
        redirect("/pending");
    }

    return <>{children}</>;
}
