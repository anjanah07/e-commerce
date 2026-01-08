"use server";

import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client";
import { convertToPlainObject } from "../utils";

export const getLatestProducts = async () => {
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
  });

  const prisma = new PrismaClient({
    adapter,
    log: ["info", "query"],
  });
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
};
