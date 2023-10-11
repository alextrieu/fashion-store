import { useEffect, useState } from "react";
import SanityClient from "../../../src/client";
import { useParams } from "react-router-dom";
import { Product } from "../../types/types";

import StorageSelectionForm from "./StorageSelectionForm";
import RelatedProducts from "./RelatedProducts";
import ProductOverview from "./ProductOverView/ProductOverview";

type Params = {
  productId: string;
};

export default function ProductListing() {
  const { productId } = useParams<Params>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("black");

  useEffect(() => {
    SanityClient.fetch(`*[_type == "product" && _id == "${productId}"]`)
      .then((data: Product[]) => setProduct(data[0]))
      .catch(console.error);
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  const productBrand = () => {
    switch (product.brand) {
      case "Apple":
        return (
          <>
            <i className="fa-brands fa-apple text-xl"></i> {product.brand}
          </>
        );
      case "Samsung":
        return (
          <>
            <i className="fa-brands fa-samsung text-xl"></i> {product.brand}
          </>
        );
      default:
        <>{product.brand}</>;
    }
  };

  return (
    <div className="px-4 bg-custom-cream flex flex-col gap-3">
      <div>
        <span className="text-lg">{productBrand()}</span>
        <h1 className="text-2xl font-semibold tracking-wide">Buy {product.name}</h1>
      </div>

      <span className="mb-2 text-lg">
        <i className="fa-solid fa-circle-info"></i> Get $40-$640 for your trade-in
      </span>

      <div className="flex justify-center">
        <img src={product.imageLink} className="h-auto w-64" />
      </div>

      {product.colorAvailability && (
        <div>
          <p className="text-xl font-medium mb-1">Color</p>
          <div className="flex gap-3">
            {product.colorAvailability.map((color) => (
              <button
                key={color}
                className={`w-7 h-7 rounded-full shadow-md ${
                  selectedColor === color ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setSelectedColor(color)}
                style={{ backgroundColor: color }}
              ></button>
            ))}
          </div>
        </div>
      )}

      <StorageSelectionForm product={product} />

      <RelatedProducts product={product} />

      <ProductOverview product={product} />
    </div>
  );
}
