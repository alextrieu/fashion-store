import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { Product } from "../../types/types";

type Params = {
  product: Product;
};

export default function StorageSelectionForm({ product }: Params) {
  const initialStorage =
    product.storageOptions && product.storageOptions[0] ? product.storageOptions[0].storageSize : "";
  const initialPrice = product.storageOptions && product.storageOptions[0] ? product.storageOptions[0].price : null;

  const [selectedStorage, setSelectedStorage] = useState(initialStorage);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(initialPrice);

  useEffect(() => {
    setSelectedStorage(initialStorage);
    setSelectedPrice(initialPrice);
  }, [product, initialStorage, initialPrice]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedStorage(e.target.value);

    const selectedOption = product.storageOptions.find((option) => option.storageSize === e.target.value);

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
      <fieldset>
        <legend className="mb-1 text-lg font-medium">Storage Size:</legend>

        {product.storageOptions &&
          product.storageOptions.map((storage, index) => (
            <div key={index}>
              <div className="flex justify-between">
                <div>
                  <input
                    type="radio"
                    id={`storage-${index}`}
                    name="storage"
                    value={storage.storageSize}
                    onChange={handleChange}
                    checked={selectedStorage === storage.storageSize}
                    className="mr-2"
                  />
                  <label htmlFor={`storage-${index}`}>
                    <span>{storage.storageSize}</span>{" "}
                  </label>
                </div>

                <span>
                  From ${storage.price} or ${twoYearsAmortization(storage.price)} for 24 months.
                </span>
              </div>
              {index === 0 && (
                <div style={{ borderBottom: "1px solid black", width: "100%", height: "0", margin: "8px 0" }}></div>
              )}
            </div>
          ))}
      </fieldset>

      <p className="text-2xl font-medium">${selectedPrice} CAD</p>

      <p className="text-lg text-stone-600">
        Or{" "}
        {selectedPrice !== null
          ? `$${twoYearsAmortization(selectedPrice)}/month with 24-months financing`
          : "Please select a storage size to see pricing"}
      </p>

      <button type="submit" style={{ backgroundColor: "#FFD38F" }} className="p-3 rounded-3xl font-medium">
        Add to Cart
      </button>
    </form>
  );
}
