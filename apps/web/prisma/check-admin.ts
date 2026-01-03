import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function checkAdmin() {
    const email = process.env.ADMIN_EMAIL;

    if (!email) {
        console.error("❌ ADMIN_EMAIL not set in .env");
        process.exit(1);
    }

    const admin = await prisma.adminUser.findUnique({
        where: { email },
    });

    if (!admin) {
        console.log(`❌ No admin user found with email: ${email}`);
        process.exit(1);
    }

    console.log("\n✅ Admin user found:");
    console.log(`   Email: ${admin.email}`);
    console.log(`   Name: ${admin.firstName} ${admin.lastName}`);
    console.log(`   Role: ${admin.role}`);
    console.log(`   ID: ${admin.id}`);
    console.log(`   Created: ${admin.createdAt}`);

    // Test password
    if (process.env.ADMIN_PASSWORD) {
        const isValid = await bcrypt.compare(
            process.env.ADMIN_PASSWORD,
            admin.passwordHash
        );
        console.log(`\n🔐 Password test: ${isValid ? "✅ VALID" : "❌ INVALID"}`);

        if (!isValid) {
            console.log("\n⚠️  The password in .env doesn't match the stored hash!");
            console.log("   Either update .env or re-run seed to create new admin.");
        }
    } else {
        console.log("\n❌ ADMIN_PASSWORD not set in .env");
    }
}

checkAdmin()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
