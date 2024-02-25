import Product from "@/components/Product";
import fetchSearch from "@/lib/fetchSearch";

type Props = {
  searchParams: {
    q: string;
  };
};

async function SearchPage({ searchParams: { q } }: Props) {
  const results = await fetchSearch(q);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="mb-5 text-gray-400">
        ({results?.content.total_results} results)
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {results?.content.organic.map((product) => (
          <li key={product.product_id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchPage;
