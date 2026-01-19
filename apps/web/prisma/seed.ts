import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const adminEmail = process.env.ADMIN_EMAIL;
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminEmail || !adminPassword) {
        console.error("❌ ADMIN_EMAIL and ADMIN_PASSWORD must be set in .env");
        process.exit(1);
    }

    // Check if admin already exists
    const existing = await prisma.adminUser.findUnique({
        where: { email: adminEmail },
    });

    // Hash password
    const passwordHash = await bcrypt.hash(adminPassword, 10);

    if (existing) {
        await prisma.adminUser.update({
            where: { email: adminEmail },
            data: { passwordHash },
        });
        console.log(`✅ Admin user password updated: ${adminEmail}`);
        return;
    }

    const admin = await prisma.adminUser.create({
        data: {
            email: adminEmail,
            passwordHash,
            firstName: "Super",
            lastName: "Admin",
            role: "SUPER_ADMIN",
        },
    });

    console.log(`✅ Created SUPER_ADMIN: ${admin.email}`);
    console.log(`   ID: ${admin.id}`);
    console.log(`   Name: ${admin.firstName} ${admin.lastName}`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
