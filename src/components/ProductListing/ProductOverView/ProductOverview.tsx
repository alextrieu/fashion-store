import { useState } from "react";
import { Product } from "../../../types/types";
import RenderSection from "./RenderSection";

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

  return (
    <>
      <div className="flex gap-12 justify-center mt-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`${section.id === activeSection ? "font-semibold" : ""}`}
          >
            {section.label}
          </button>
        ))}
      </div>

      <hr className="border-black" />

      <RenderSection product={product} activeSection={activeSection} />
    </>
  );
}
