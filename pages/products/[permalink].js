import React from "react";
import commerce from "../../lib/commerce";
import Header from "../../components/Header/Header";
import Link from "next/link";
import { useCartDispatch } from "../../context/cart";

export async function getStaticProps({ params }) {
  const { permalink } = params;
  const { data: merchant } = await commerce.merchants.about();
  const product = await commerce.products.retrieve(permalink, {
    type: "permalink",
  });

  return {
    props: {
      merchant,
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product, merchant }) {
  const { setCart } = useCartDispatch();

  const addToCart = () =>
    commerce.cart.add(product.id).then(({ cart }) => setCart(cart));

  return (
    <React.Fragment>
      <Header merchant={merchant[0]} />
      <div>
        <h1>{product.name}</h1>
        <p>{product.price.formatted_with_symbol}</p>
      </div>
      <button onClick={addToCart}>Add to Cart</button>
      <Link href={"/"}>Retourner</Link>
    </React.Fragment>
  );
}
