import Styles from "../styles/global";
import { CartProvider } from "../context/cart";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "../components/Cart/Cart";

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider>
        <Cart />
        <Component {...pageProps} />
        <style jsx>{Styles}</style>
      </ChakraProvider>
    </CartProvider>
  );
}
