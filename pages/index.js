import React from "react";
import ProductList from "../components/ProductList/ProductList";
import Header from "../components/Header/Header";
import commerce from "../lib/commerce";
import globalStyles from "../styles/global";

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
      <style jsx={globalStyles}></style>
    </React.Fragment>
  );
}
