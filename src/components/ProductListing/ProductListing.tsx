import { useEffect, useState } from "react";
import SanityClient from "../../../src/client";
import { useParams } from "react-router-dom";
import { Product } from "../../types/types";

import ProductHeader from "./ProductHeader";
import ColorSelector from "./ColorSelector";
import StorageSelectionForm from "./StorageSelectionForm";
import RelatedProducts from "./RelatedProducts";
import ProductOverview from "./ProductOverView/ProductOverview";

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
    <div className="px-4 bg-custom-cream flex flex-col gap-3">
      <ProductHeader product={product} />
      <ColorSelector product={product} />
      <StorageSelectionForm product={product} />
      <RelatedProducts product={product} />
      <ProductOverview product={product} />
    </div>
  );
}
