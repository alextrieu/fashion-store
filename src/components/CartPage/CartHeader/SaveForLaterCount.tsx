import { CartHeaderProps } from "../../../types/types";

const SaveForLaterCount = ({ activeTab, setActiveTab }: CartHeaderProps) => {
  return (
    <p
      className={`w-1/2 text-center py-2 cursor-pointer ${
        activeTab === "saveForLater" ? "border-b-2 border-black" : ""
      }`}
      onClick={() => setActiveTab("saveForLater")}
    >
      Save For Later
    </p>
  );
};

export default SaveForLaterCount;
