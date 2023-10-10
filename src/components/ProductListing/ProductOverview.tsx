import { useState } from "react";
import { Product } from "../../types/types";

type Params = {
  product: Product;
};

const sections = [
  { id: 1, label: "Details" },
  { id: 2, label: "Ratings" },
  { id: 3, label: "Features" },
];

export default function ProductOverview({ product }: Params) {
  const [activeSection, setActiveSection] = useState(sections[0].id);

  const renderSection = () => {
    switch (activeSection) {
      case 1:
        return <p>{product.details}</p>;
      case 2:
        return product.reviews ? (
          product.reviews.map((review) => (
            <div key={review.id}>
              <p>{review.reviewerName}</p>
              <p>{review.rating}</p>
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet</p>
        );
      case 3:
        return <p>{product.features}</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="flex gap-5 justify-center">
        {sections.map((section) => (
          <button key={section.id} onClick={() => setActiveSection(section.id)}>
            {section.label}
          </button>
        ))}
      </div>

      <hr className="border-black mt-2 py-2" />

      {renderSection()}
    </>
  );
}
