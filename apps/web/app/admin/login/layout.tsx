import { ReactNode } from "react";

export default function AdminLoginLayout({ children }: { children: ReactNode }) {
    // No authentication check - this is the login page
    return <>{children}</>;
}
