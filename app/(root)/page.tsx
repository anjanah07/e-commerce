import ProductList from "@/components/shared/products/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";
export const metadata = {
  title: "Home",
};
export default async function Home() {
  const latestProducts = await getLatestProducts();
  return (
    <div>
      <ProductList data={latestProducts} title="Newest arrivals" limit={4} />
    </div>
  );
}
