import { useEffect, useState } from "react";
import SanityClient from "../../../src/client";
import { Product } from "../../types/types";

type Params = {
  product: Product;
};

export default function RelatedProducts({ product }: Params) {
  const [relatedProducts, setRelatedProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (product && product._id) {
      SanityClient.fetch(`*[_type == "product" && _id != "${product._id}"]`)
        .then((data: Product[]) => setRelatedProducts(data))
        .catch(console.error);
    }
  }, [product?._id]);

  return (
    <div>
      <h1>Complete Your Purchase</h1>
      <div className="flex gap-3">
        {relatedProducts?.map((product) => (
          <div className="flex flex-col" key={product._id}>
            <p>{product.name}</p>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}
