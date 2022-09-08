import React from "react";
import ProductList from "../components/ProductList";
import Header from "../components/Header";
import commerce from "../lib/commerce";

export async function getStaticProps() {
  const { data: merchant } = await commerce.merchants.about();
  const { data: products } = await commerce.products.list();
  return {
    props: {
      merchant,
      products,
    },
  };
}

export default function IndexPage({ merchant, products }) {
  return (
    <React.Fragment>
      <Header merchant={merchant[0]} />
      <ProductList products={products} />
    </React.Fragment>
  );
}
