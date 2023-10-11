import { useEffect, useState } from "react";
import SanityClient from "../../../src/client";
import { Product } from "../../types/types";
import { Link } from "react-router-dom";

type Params = {
  product: Product;
};

export default function RelatedProducts({ product }: Params) {
  const [relatedProducts, setRelatedProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    if (product && product._id) {
      SanityClient.fetch(`*[_type == "product" && _id != "${product._id}" && (defined(basePrice))]`)
        .then((data: Product[]) => setRelatedProducts(data))
        .catch(console.error);
    }
  }, [product?._id]);

  return (
    <div className="flex flex-col gap-4 mt-4">
      <h1 className="self-center text-xl font-semibold">You Might Also Like</h1>
      <div className="flex justify-around">
        {relatedProducts?.slice(0, 2).map((product) => (
          <Link to={`/product/${product._id}`} key={product._id}>
            <div className="flex flex-col items-center">
              <p className="text-lg">{product.name}</p>
              <img src={product.imageLink} className="h-32 w-32" />
              <p className="text-lg font-medium">${product.basePrice}</p>
              <button style={{ backgroundColor: "#FFD38F" }} className="mt-2 w-20 rounded-3xl p-1">
                Add
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
