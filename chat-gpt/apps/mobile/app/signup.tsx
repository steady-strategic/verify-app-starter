import { useRouter } from "expo-router";
import { SignupForm } from "@acme/ui";

export default function SignupScreen() {
  const router = useRouter();
  return (
    <SignupForm
      // Replace with your deployed web domain when ready
      endpoint="http://localhost:3000/api/auth/register"
      onSuccess={() => router.replace("/pending")}
    />
  );
}
