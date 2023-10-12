import { Product } from "../../types/types";
import { Link } from "react-router-dom";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { _id, name, tagline, variants } = product;
  return (
    <Link to={`/product/${_id}`}>
      <article key={_id} className="flex-none flex flex-col items-center gap-1 w-40">
        <div className="w-full h-64 relative">
          <img
            src={variants[0].imageLinks[0]}
            alt={name}
            className="absolute top-0 left-0 w-full h-full object-contain"
          />
        </div>
        <h2 className="text-center line-clamp-1">{name}</h2>
        <p className="text-center line-clamp-2 h-12">{tagline}</p>
        <p className="font-semibold">{variants[0].price ? `From $${variants[0].price}` : "Contact Us"}</p>
      </article>
    </Link>
  );
}
