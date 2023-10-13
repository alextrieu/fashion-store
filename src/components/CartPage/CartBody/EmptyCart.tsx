const EmptyCart = () => {
  return (
    <section className="px-5 pt-5 flex flex-col gap-5">
      <article>
        <h2 className="font-medium text-xl">Your bag is empty</h2>
      </article>

      <nav className="flex flex-col gap-5">
        <h2 className="font-medium text-xl">Shop our favourites</h2>
        <ul className="flex flex-col gap-5">
          <li className="border-2 border-black border-solid p-3 text-center">BEST SELLERS</li>
          <li className="border-2 border-black border-solid p-3 text-center">SHOP ALL</li>
          <li className="border-2 border-black border-solid p-3 text-center">NEW ARRIVALS</li>
        </ul>
      </nav>
    </section>
  );
};

export default EmptyCart;
