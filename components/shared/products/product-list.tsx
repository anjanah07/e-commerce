const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any;
  title?: string;
  limit?: number;
}) => {
  const limitedData = limit ? data.slice(0, limit) : data;
  return (
    <div className="my-10">
      <h2 className="h2-bold mb-4">{title}</h2>
      {limitedData.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map((product: any) => (
            <div key={product.id}>{product.name}</div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">No products found</div>
      )}
    </div>
  );
};

export default ProductList;
