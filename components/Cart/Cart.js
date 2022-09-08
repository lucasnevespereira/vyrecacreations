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
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div className="cart">
        <Button ref={btnRef} className="show-btn" onClick={onOpen}>
          <div className="cart-icon">
            <ShoppingCartOutlined />
            {/* <Badge
              className="badge"
              colorScheme="purple"
              fontSize="10px"
              ml={1}
            >
              0
            </Badge> */}
          </div>
          <Divider orientation="vertical" />
          <span style={{ marginLeft: "10px" }}>€0.00</span>
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
          <DrawerBody>Le panier est vide!</DrawerBody>

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
