import { Product } from "../../types/types";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  console.log(product.storageOptions);
  return (
    <Link to={`/product/${product._id}`}>
      <article key={product._id} className="flex-none flex flex-col items-center gap-1 w-40">
        <div className="w-full h-64 relative">
          <img
            src={product.imageLink}
            alt={product.name}
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
        <h2 className="text-center line-clamp-1">{product.name}</h2>
        <p className="text-center line-clamp-2 h-12">{product.tagline}</p>
        <p className="font-semibold">From ${}</p>
      </article>
    </Link>
  );
}
