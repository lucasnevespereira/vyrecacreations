import { Button } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import Styles from "./ProductStyles";
import { useRouter } from "next/router";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useCartDispatch, useCartState } from "../../context/cart";
import { useToast } from "@chakra-ui/react";
import commerce from "../../lib/commerce";

export default function Product(product) {
  const router = useRouter();
  const { line_items } = useCartState();
  const { setCart } = useCartDispatch();
  const toast = useToast();
  const handleUpdateCart = (cart) => setCart(cart);
  const addToCart = () => {
    let productInCart = false;
    line_items.map((item) => {
      if (item.product_id === product.id) {
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
      commerce.cart.add(product.id).then(handleUpdateCart);
    }
  };
  return (
    <div className="product-container">
      <div className="container-left">
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="swiper"
        >
          {product.assets.map((asset) => (
            <SwiperSlide key={asset.id} className="swiper-slide">
              <img src={asset.url} alt="asset" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="container-right">
        <p className="product-title">{product.name}</p>
        {product.description.length > 0 && (
          <div
            className="product-desc"
            dangerouslySetInnerHTML={{ __html: product.description }}
          />
        )}
        <div className="product-buy">
          {product.is.sold_out ? (
            <>
              <span className="product-price">
                {product.price.formatted_with_symbol}
              </span>
              <Button className="product-add sold" disabled={true}>
                Vendu
              </Button>
            </>
          ) : (
            <>
              <span className="product-price">
                {product.price.formatted_with_symbol}
              </span>
              <Button className="product-add buy-now" onClick={addToCart}>
                + Ajouter au panier
              </Button>
            </>
          )}
        </div>

        <div className="go-back">
          <Button
            style={{ display: "flex", justifySelf: "flex-end" }}
            leftIcon={<ArrowLeftOutlined />}
            onClick={() => router.push("/")}
          >
            Retourner
          </Button>
        </div>
      </div>
      <style jsx>{Styles}</style>
    </div>
  );
}
