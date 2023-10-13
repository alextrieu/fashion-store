import ItemCount from "./ItemCount";
import SaveForLaterCount from "./SaveForLaterCount";
import { useState } from "react";
const CartHeader = () => {
  const [activeTab, setActiveTab] = useState("bag");

  return (
    <header className="flex justify-between border-b">
      <ItemCount activeTab={activeTab} setActiveTab={setActiveTab} />
      <SaveForLaterCount activeTab={activeTab} setActiveTab={setActiveTab} />
    </header>
  );
};

export default CartHeader;
