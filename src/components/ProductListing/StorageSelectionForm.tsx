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
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Storage Size:</legend>

        {product.storageOptions &&
          product.storageOptions.map((storage, index) => (
            <div key={index}>
              <input
                type="radio"
                id={`storage-${index}`}
                name="storage"
                value={storage.storageSize}
                onChange={handleChange}
                checked={selectedStorage === storage.storageSize}
              />
              <label htmlFor={`storage-${index}`}>
                <span>{storage.storageSize}</span>{" "}
                <span>
                  From ${storage.price} or ${twoYearsAmortization(storage.price)} for 24 months.
                </span>
              </label>
            </div>
          ))}
      </fieldset>
      <p>{selectedPrice}</p>
      <p>
        Or{" "}
        {selectedPrice !== null
          ? `$${twoYearsAmortization(selectedPrice)}/month with 24-months financing`
          : "Please select a storage size to see pricing"}
      </p>
      <button type="submit">Add to Cart</button>
    </form>
  );
}
