import { useState } from "react";
import { Product } from "../../types/types";
import Carousel, { CarouselItem } from "./ProductCarousel/ProductCarousel";

type Params = {
  product: Product;
};

const ColorSelector = ({ product }: Params) => {
  const { variants } = product;
  const [selectedColor, setSelectedColor] = useState(variants.find((variant) => variant.color)?.color || "");
  const [initialImages, setInitialImages] = useState(variants.find((variant) => variant.imageLinks)?.imageLinks);
  const [activeIndex, setActiveIndex] = useState(0);

  const updateImages = (color: string, imageLinks: string[]) => {
    setSelectedColor(color);
    setInitialImages(imageLinks);
    setActiveIndex(0);
  };

  return (
    <>
      {variants && variants.filter((variant) => variant.color).length > 0 && (
        <>
          <Carousel activeIndex={activeIndex} setActiveIndex={setActiveIndex}>
            {initialImages?.map((image, index) => (
              <CarouselItem key={index}>
                <img src={image} alt={`Image ${index}`} className="h-72 w-auto" />
              </CarouselItem>
            ))}
          </Carousel>

          <div>
            <p className="text-xl font-medium mb-1">Color</p>
            <div className="flex gap-3">
              {variants.map((variant) => (
                <button
                  key={variant.color}
                  className={`w-7 h-7 rounded-full shadow-md ${
                    selectedColor === variant.color ? "border-2 border-blue-500" : ""
                  }`}
                  onClick={() => updateImages(variant.color, variant.imageLinks)}
                  style={{ backgroundColor: variant.color }}
                ></button>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ColorSelector;
