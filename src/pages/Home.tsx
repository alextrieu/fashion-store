import Hero from "../components/Hero/Hero";
import PopularProducts from "../components/Categories/PopularProducts/PopularProducts";

export default function Home() {
  return (
    <main className="px-5 bg-custom-cream">
      <Hero />
      <PopularProducts />
    </main>
  );
}
