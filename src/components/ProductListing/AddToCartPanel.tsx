type Params = {
  price: number | null;
  twoYearsAmortization: (price: number) => string;
};

const AddToCartPanel = ({ twoYearsAmortization, price }: Params) => {
  return (
    <>
      <p className="text-2xl font-medium">${price} CAD</p>

      <p className="text-lg text-stone-600">
        {price && `Or $${twoYearsAmortization(price)}/month with 24-months financing`}
      </p>

      <button type="submit" style={{ backgroundColor: "#FFD38F" }} className="p-3 rounded-3xl font-medium">
        Add to Cart
      </button>
    </>
  );
};

export default AddToCartPanel;
