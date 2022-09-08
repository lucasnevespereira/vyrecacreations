import Link from "next/link";
import Styles from "./ProductListStyles";
import commerce from "../../lib/commerce";
import { useCartDispatch } from "../../context/cart";
import Router from "next/router";

export default function ProductList({ products }) {
  if (!products) return null;
  const { setCart } = useCartDispatch();

  const handleUpdateCart = ({ cart }) => {
    setCart(cart);
    Router.reload(window.location.pathname);
  };

  const addToCart = (productId) =>
    commerce.cart.add(productId).then(handleUpdateCart);
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
                  {product.is.sold_out ? (
                    <a className="link buy-now soldout">Vendu</a>
                  ) : (
                    <a
                      onClick={() => addToCart(product.id)}
                      className="link buy-now"
                    >
                      Ajouter au Panier
                    </a>
                  )}
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
                  {product.is.sold_out && (
                    <small className="sold">(Vendu)</small>
                  )}
                </div>

                <div className="price">
                  <p className={product.is.sold_out && "sold"}>
                    {product.price.formatted_with_symbol}
                  </p>
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
