import { useState, useEffect } from "react";
import sanityClient from "../../../client";

export default function PopularProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    sanityClient.fetch('*[_type == "product"]').then(setProducts).catch(console.error);
  }, []);

  console.log(products);
  return (
    <section>
      <h1>Popular Products</h1>
      <div>
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <h2>{product.name}</h2>
              <h2>From ${product.price}</h2>
              <h2>{product.tagline}</h2>
              <br></br>
            </div>
          ))}
      </div>
    </section>
  );
}

// iPhone 15 Pro
// Titanium. So Strong. So light. So Pro.
// From $999

// Apple Watch Series 9
// Smarter. Brighter. Mightier.
// From $399
