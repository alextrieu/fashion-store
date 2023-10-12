import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Product } from "../../types/types";
import AddToCartPanel from "./AddToCartPanel";

type Params = {
  product: Product;
};

export default function StorageSelectionForm({ product }: Params) {
  const { variants } = product;

  const initialStorage = variants?.find((variant) => variant.storageSize)?.storageSize || null;

  const initialPrice = variants?.find((variant) => variant.price)?.price || null;

  const [selectedStorage, setSelectedStorage] = useState(initialStorage);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(initialPrice);

  useEffect(() => {
    setSelectedStorage(initialStorage);
    setSelectedPrice(initialPrice);
  }, [product, initialStorage, initialPrice]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedStorage(e.target.value);

    const selectedOption = variants.find((variant) => variant.storageSize === e.target.value);

    if (selectedOption) {
      setSelectedPrice(selectedOption.price);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Selected Storage Size: ${selectedStorage}`);
  };

  const twoYearsAmortization = (price: number) => {
    return (price / 24).toFixed(2);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <fieldset role="radiogroup">
        {variants.find((variant) => variant.storageSize) && (
          <legend className="mb-1 text-lg font-medium">Storage Size:</legend>
        )}

        {variants.find((variant) => variant.storageSize) &&
          variants.map((variant, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    id={`storage-${index}`}
                    name="storage"
                    value={variant.storageSize}
                    onChange={handleChange}
                    checked={selectedStorage === variant.storageSize}
                    className="mr-2"
                    aria-labelledby={`storage-label-${index}`}
                  />
                  <label htmlFor={`storage-${index}`}>{variant.storageSize}</label>
                </div>

                <span>
                  From ${variant.price} or ${twoYearsAmortization(variant.price)} for 24 months.
                </span>
              </div>
              {index === 0 && <div className="border-2 border-dashed border-b-black w-full h-0 my-2"></div>}
            </div>
          ))}
      </fieldset>

      <AddToCartPanel twoYearsAmortization={twoYearsAmortization} price={selectedPrice} />
    </form>
  );
}
