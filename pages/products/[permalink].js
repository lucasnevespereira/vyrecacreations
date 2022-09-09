import React from "react";
import commerce from "../../lib/commerce";
import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";

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
  return (
    <React.Fragment>
      <Header merchant={merchant[0]} />
      <Product {...product} />
    </React.Fragment>
  );
}
