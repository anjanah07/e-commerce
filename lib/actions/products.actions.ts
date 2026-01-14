"use server";

import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../generated/prisma/client";
import { convertToPlainObject } from "../utils";
const adapter = new PrismaNeon({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
  log: ["info", "query"],
});

export const getLatestProducts = async () => {
  const data = await prisma.product.findMany({
    take: 4,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
};

export const getProductBySlug = async (slug: string) => {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
};
