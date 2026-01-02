import { NextResponse } from "next/server";
import { RegisterSchema } from "@acme/validation";
import { prisma } from "@/lib/db";
import { hashPassword } from "@/lib/password";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = RegisterSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid input", issues: parsed.error.issues },
      { status: 400 }
    );
  }

  const input = parsed.data;

  const passwordHash = await hashPassword(input.password);

  try {
    const result = await prisma.user.create({
      data: {
        email: input.email,
        passwordHash,
        status: "pending",
        verificationRequests: {
          create: {
            decision: "pending",
            payload: {
              firstName: input.firstName,
              lastName: input.lastName,
              email: input.email,
              businessName: input.businessName ?? undefined,
              licenseNumber: input.licenseNumber,
              type: input.type,
              state: input.state
            }
          }
        }
      },
      select: {
        id: true,
        status: true,
        verificationRequests: { select: { id: true } }
      }
    });

    const verificationRequestId = result.verificationRequests[0]?.id;

    // Optional: send to Make.com / n8n to create monday item
    // if (process.env.MAKE_REGISTER_WEBHOOK_URL) {
    //   await fetch(process.env.MAKE_REGISTER_WEBHOOK_URL, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       verificationRequestId,
    //       userId: result.id,
    //       firstName: input.firstName,
    //       lastName: input.lastName,
    //       email: input.email,
    //       businessName: input.businessName ?? "",
    //       licenseNumber: input.licenseNumber,
    //       type: input.type,
    //       state: input.state
    //     })
    //   });
    // }

    return NextResponse.json(
      { userId: result.id, verificationRequestId, status: result.status },
      { status: 201 }
    );
  } catch (e: any) {
    // Prisma unique constraint (email) tends to have code P2002; keep message generic
    if (e?.code === "P2002") {
      return NextResponse.json({ error: "Email already in use" }, { status: 409 });
    }
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
