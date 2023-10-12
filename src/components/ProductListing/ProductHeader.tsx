import { Product } from "../../types/types";

type Params = {
  product: Product;
};

const ProductHeader = ({ product }: Params) => {
  const { brand, name } = product;
  const productBrand = () => {
    switch (brand) {
      case "Apple":
        return (
          <>
            <i className="fa-brands fa-apple text-xl"></i> {brand}
          </>
        );
      case "Samsung":
        return (
          <>
            <i className="fa-brands fa-samsung text-xl"></i> {brand}
          </>
        );
      default:
        <>{brand}</>;
    }
  };
  return (
    <>
      <div>
        <span className="text-lg">{productBrand()}</span>
        <h1 className="text-2xl font-semibold tracking-wide">Buy {name}</h1>
      </div>

      <span className="mb-2 text-lg">
        <i className="fa-solid fa-circle-info"></i> Get $40-$640 for your trade-in
      </span>
    </>
  );
};

export default ProductHeader;
