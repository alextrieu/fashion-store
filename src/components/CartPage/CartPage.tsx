import CartHeader from "./CartHeader/CartHeader";
import ShippingBanner from "./ShippingBanner/ShippingBanner";
import EmptyCart from "./CartBody/EmptyCart";

const CartPage = () => {
  return (
    <section className="mt-14">
      <CartHeader />
      <ShippingBanner />
      <EmptyCart />
    </section>
  );
};

export default CartPage;
