export const dynamic = "force-dynamic";
import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";
import { Product } from "@/types";
export const metadata = {
  title: "Home",
};
export default async function Home() {
  const latestProducts = await getLatestProducts();
  // Ensure all product 'price' values are strings, since ProductList expects price as string
  return (
    <div>
      <ProductList
        data={latestProducts.map((product) => ({
          ...product,
          price: product.price.toString(),
          rating: product.rating.toString(),
        }))}
        title="Newest arrivals"
        limit={4}
      />
    </div>
  );
}
