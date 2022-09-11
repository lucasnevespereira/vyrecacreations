import Link from "next/link";
import Styles from "./ProductListStyles";
import commerce from "../../lib/commerce";
import { useCartDispatch, useCartState } from "../../context/cart";
import { useToast, Button } from "@chakra-ui/react";

export default function ProductList({ products }) {
  if (!products) return null;
  const { line_items } = useCartState();
  const { setCart } = useCartDispatch();
  const toast = useToast();

  const handleUpdateCart = (cart) => setCart(cart);

  const addToCart = (productId) => {
    let productInCart = false;
    line_items.map((item) => {
      if (item.product_id === productId) {
        toast({
          title: "Ce produit est dans votre panier",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        productInCart = true;
      }
    });
    if (!productInCart) {
      commerce.cart.add(productId).then(handleUpdateCart);
    }
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <div className="product__overlay">
            <div className="product__contents">
              <div className="product__images">
                <div className="hover-overlay">
                  <Link href={`/products/${product.permalink}`}>
                    <Button className="btn learn-more">Détails Produit</Button>
                  </Link>
                  {product.is.sold_out ? (
                    <Button className="btn soldout">Vendu</Button>
                  ) : (
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="btn buy-now"
                    >
                      Ajouter au panier
                    </Button>
                  )}
                </div>
                {product.image.url && (
                  <img
                    src={product.image.url}
                    className="product"
                    alt="product image main"
                  />
                )}
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
