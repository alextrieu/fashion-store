import { useState, useEffect } from "react";
import sanityClient from "../../../client";
import ProductCard from "../../ProductCard/ProductCard";
import { Product } from "../../../types/types";

export default function PopularProducts() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    sanityClient.fetch('*[_type == "product"]').then(setProducts).catch(console.error);
  }, []);

  return (
    <section className="flex flex-col gap-1">
      <h2 className="text-2xl font-semibold">Popular Products</h2>
      <div className="flex gap-5 overflow-x-auto pb-4">
        {/* Product Grid */}
        {products && products.map((product) => <ProductCard key={product._id} product={product} />)}
      </div>
      <button className="rounded-md border-solid border-2 border-black self-center p-2">Explore</button>
    </section>
  );
}
