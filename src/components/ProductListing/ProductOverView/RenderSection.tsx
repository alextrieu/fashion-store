import { Product } from "../../../types/types";

type Params = {
  product: Product;
  activeSection: number;
};
function RenderSection({ product, activeSection }: Params) {
  switch (activeSection) {
    case 1:
      return <p>{product.details}</p>;
    case 2:
      return (
        <div className="flex flex-col gap-4">
          {product.reviews ? (
            product.reviews.map((review) => (
              <div key={review.id}>
                <div>
                  <p>{review.reviewerName}</p>
                  <p className="mb-2">
                    {[...Array(review.rating)].map((_, index) => (
                      <i className="fa-solid fa-star text-yellow-400" key={index}></i>
                    ))}
                  </p>
                  <p>{review.comment}</p>
                </div>
                <div
                  style={{
                    height: "3px",
                    background: "white",
                    backgroundImage: "radial-gradient(black 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                    marginTop: "13px",
                  }}
                ></div>
              </div>
            ))
          ) : (
            <p>No reviews yet</p>
          )}
        </div>
      );
    case 3:
      return (
        <>
          <h1 className="text-lg font-medium">{product.name} Features</h1>
          {product.features.map((feature, index) => (
            <div key={index}>
              <h2 className="text-xl font-medium">{feature.heading}</h2>
              <p>{feature.featureDescription.part1}</p>
              <p>{feature.featureDescription.part2}</p>
            </div>
          ))}
        </>
      );
    default:
      return null;
  }
}

export default RenderSection;
