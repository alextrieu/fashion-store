import { useEffect, useState } from "react";
import SanityClient from "../../../src/client";
import { useParams } from "react-router-dom";
import { Product } from "../../types/types";

import StorageSelectionForm from "./StorageSelectionForm";
import ArrivalTimeChecker from "./ArrivalTimeChecker";

type Params = {
  productId: string;
};

export default function ProductListing() {
  const { productId } = useParams<Params>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    SanityClient.fetch(`*[_type == "product" && _id == "${productId}"]`)
      .then((data: Product[]) => setProduct(data[0]))
      .catch(console.error);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <div>
        <h3>{product.brand}</h3>
        <h1>Buy {product.name}</h1>
      </div>

      <div>
        <span>
          <i className="fa-solid fa-circle-plus"></i>
        </span>
        <span> Get $40-$640 for your trade-in</span>
      </div>
      <img src={product.imageLink} />
      <div>
        <p>Color</p>
        <div className="flex gap-2.5">
          {product.colorAvailability &&
            product.colorAvailability.map((color, index) => (
              <div key={index} className="w-5 h-5 rounded-full shadow-md" style={{ backgroundColor: color }}></div>
            ))}
        </div>
      </div>
      <div>
        <StorageSelectionForm product={product} />
      </div>
      <ArrivalTimeChecker />
    </>
  );
}
