import { SignupForm } from "@/components/SignupForm";

export default function SignupPage() {
    return (
        <div className="container">
            <div className="card">
                <h1 className="title">Create Account</h1>
                <p className="subtitle">
                    Enter your details to submit for verification
                </p>
                <SignupForm />
            </div>
        </div>
    );
}
