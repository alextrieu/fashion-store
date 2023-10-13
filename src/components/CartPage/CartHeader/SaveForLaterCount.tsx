import { CartHeaderProps } from "../../../types/types";

const SaveForLaterCount = ({ activeTab, setActiveTab }: CartHeaderProps) => {
  return (
    <span
      className={`w-1/2 text-center py-2 cursor-pointer ${
        activeTab === "saveForLater" ? "border-b-2 border-black font-medium" : ""
      }`}
      onClick={() => setActiveTab("saveForLater")}
    >
      Save For Later (0)
    </span>
  );
};

export default SaveForLaterCount;
