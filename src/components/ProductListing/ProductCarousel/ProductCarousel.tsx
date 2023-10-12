import React, { ReactNode } from "react";
import { useSwipeable } from "react-swipeable";

type CarouselItemProps = {
  children: ReactNode;
};

type CarouselProps = {
  children: ReactNode;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export const CarouselItem: React.FC<CarouselItemProps> = ({ children }) => {
  return <div className={"w-full inline-flex items-center justify-center"}>{children}</div>;
};

const Carousel: React.FC<CarouselProps> = ({ children, activeIndex, setActiveIndex }) => {
  const updateIndex = (newIndex: number) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <div className="overflow-hidden" {...handlers}>
      <div
        className="whitespace-nowrap transition-transform duration-300"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child);
          }
          return child;
        })}
      </div>

      <div className="flex justify-center gap-1">
        {React.Children.count(children) > 1 &&
          React.Children.map(children, (_, index) => {
            return (
              <button
                onClick={() => updateIndex(index)}
                className={`h-6 w-6 border-2 border-zinc-300 border-solid rounded-full ${
                  index === activeIndex ? "bg-zinc-600" : ""
                } `}
              ></button>
            );
          })}
      </div>
    </div>
  );
};

export default Carousel;
