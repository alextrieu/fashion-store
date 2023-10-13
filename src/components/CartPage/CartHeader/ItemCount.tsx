import { CartHeaderProps } from "../../../types/types";

const ItemCount = ({ activeTab, setActiveTab }: CartHeaderProps) => {
  return (
    <span
      className={`w-1/2 text-center py-2 cursor-pointer ${
        activeTab === "bag" ? "border-b-2 border-black font-semibold" : ""
      }`}
      onClick={() => setActiveTab("bag")}
    >
      Your Bag (0)
    </span>
  );
};

export default ItemCount;
