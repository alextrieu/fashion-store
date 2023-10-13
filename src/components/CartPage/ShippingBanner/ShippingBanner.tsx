const ShippingBanner = () => {
  return (
    <aside className="px-4 py-3 bg-yellow-50">
      <p>
        You're <span className="font-medium">$50</span> away from free shipping
      </p>
      <progress value={0} max={50} className="h-1 w-full"></progress>
    </aside>
  );
};

export default ShippingBanner;
