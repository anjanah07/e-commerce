import sampleData from "@/db/sample-data";
import ProductList from "@/components/shared/products/product-list";
export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div>
      <ProductList
        data={sampleData.products}
        title="Newest arrivals"
        limit={4}
      />
    </div>
  );
}
