import Layout from "../components/Layout";
import ProductCard from "../components/ProductCard";
import { useStore } from "../context/Store";

export default function Home() {
  const { allProducts } = useStore();

  return (
    <Layout>
      <div className="flex flex-col flex-wrap justify-around md:flex-row gap-5 -mx-12 py-3 items-center bg-baseGreen rounded-sm border-base">
        {allProducts.splice(0, 3).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Layout>
  );
}
