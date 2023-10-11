import ArrivalTimeChecker from "./ArrivalTimeChecker";

type Params = {
  price: number | null;
  twoYearsAmortization: (price: number) => string;
};

const AddToCartPanel = ({ twoYearsAmortization, price }: Params) => {
  const buttonText = price ? "Add to Cart" : "Contact Us";
  const priceText = price ? `$${price} CAD` : "This item may not be available, please contact us for more details";
  const financingText = price ? `Or $${twoYearsAmortization(price)}/month with 24-months financing` : null;

  return (
    <>
      <p className="text-2xl font-medium">{priceText}</p>

      {financingText && <p className="text-lg text-stone-600">{financingText}</p>}

      <button type="submit" style={{ backgroundColor: "#FFD38F" }} className="p-3 rounded-3xl font-medium">
        {buttonText}
      </button>

      {price && <ArrivalTimeChecker />}
    </>
  );
};

export default AddToCartPanel;
