import Link from "next/link";
import Styles from "./ProductListStyles";

export default function ProductList({ products }) {
  if (!products) return null;

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product__overlay">
            <div className="product__contents">
              <div className="product__images">
                <div className="hover-overlay">
                  <Link href={`/products/${product.permalink}`}>
                    <a className="link learn-more">Détails Produit</a>
                  </Link>
                  <a className="link buy-now">Ajouter au Panier</a>
                </div>
                <img
                  src={product.image.url}
                  className="product__image__main"
                  alt="product image main"
                />
              </div>
              <div className="product__info">
                <div className="name">
                  <p>{product.name}</p>
                </div>
                <div className="price">
                  <p>{product.price.formatted_with_symbol}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <style jsx>{Styles}</style>
    </div>
  );
}
