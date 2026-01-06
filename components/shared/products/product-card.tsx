import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <Card className="w-full max-w-sm mx-16 my-3">
        <CardHeader className="p-0 items-center">
          <Link href={`/products/${product.slug}`}>
            <Image
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={300}
              priority
            />
          </Link>
        </CardHeader>
        <CardContent className="p-4 grid gap-4">
          <div className="text-xs">{product.brand}</div>
          <Link href={`/products/${product.slug}`}>
            <h2 className="text-sm font-medium">{product.name}</h2>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProductCard;
