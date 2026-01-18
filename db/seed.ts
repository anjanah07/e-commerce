import "dotenv/config";
import { PrismaClient } from "@/lib/generated/prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import sampleData from "./sample-data";

async function main() {
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
  });

  const prisma = new PrismaClient({
    adapter,
    log: ["info", "query"],
  });

  await prisma.product.deleteMany();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  // Insert new sample data
  await prisma.product.createMany({ data: sampleData.products });
  await prisma.user.createMany({ data: sampleData.users });

  console.log("✅ Database seeded successfully");

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("❌ Seeding failed:", err);
  process.exit(1);
});
