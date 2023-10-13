import { CartHeaderProps } from "../../../types/types";

const ItemCount = ({ activeTab, setActiveTab }: CartHeaderProps) => {
  return (
    <p
      className={`w-1/2 text-center py-2 cursor-pointer ${activeTab === "bag" ? "border-b-2 border-black" : ""}`}
      onClick={() => setActiveTab("bag")}
    >
      Your Bag
    </p>
  );
};

export default ItemCount;
