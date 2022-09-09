import Styles from "./CartStyles";
import React from "react";
import {
  Divider,
  Badge,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useCartState, useCartDispatch } from "../../context/cart";
import commerce from "../../lib/commerce";

function CartItem({ id, name, quantity, line_total }) {
  const { setCart } = useCartDispatch();

  const handleUpdateCart = (cart) => setCart(cart);

  const removeItem = () => commerce.cart.remove(id).then(handleUpdateCart);
  return (
    <div className="cart-item">
      <span className="name">{name}</span>
      <Badge className="qty">{quantity}</Badge>
      <span className="price"> {line_total.formatted_with_symbol}</span>
      <DeleteOutlined onClick={removeItem} className="delete" />
    </div>
  );
}

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const { line_items, total_items, subtotal } = useCartState();
  const isEmpty = line_items.length === 0;

  return (
    <>
      <div className="cart">
        <Button ref={btnRef} className="show-btn" onClick={onOpen}>
          <div className="cart-icon">
            <ShoppingCartOutlined />
            <Badge
              className="badge"
              fontSize="10px"
              style={{ fontWeight: "bold" }}
              ml={1}
            >
              {total_items}
            </Badge>
          </div>
          <Divider orientation="vertical" />
          <span style={{ marginLeft: "10px" }}>
            {subtotal.formatted_with_symbol}
          </span>
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Votre Panier</DrawerHeader>
          <Divider />
          <DrawerBody>
            {isEmpty ? (
              <div style={{ padding: "20px 0" }}>Le panier est vide!</div>
            ) : (
              line_items.map((item) => {
                return <CartItem key={item.id} {...item} />;
              })
            )}
            <Divider />
            <div className="subtotal">
              <h3>Total</h3>
              <span>{subtotal.formatted_with_code}</span>
            </div>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Continuer Achats
            </Button>
            <Button colorScheme="green">Valider</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <style jsx>{Styles}</style>
    </>
  );
}
