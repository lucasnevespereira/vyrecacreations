import Styles from "../styles/global";
import { CartProvider } from "../context/cart";
import { ChakraProvider } from "@chakra-ui/react";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Footer/Footer";
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ChakraProvider>
        <Head>
        <title>Vyreca Creations</title>
        </Head>
        <Cart />
        <Component {...pageProps} />
        <Footer />
        <style jsx>{Styles}</style>
      </ChakraProvider>
    </CartProvider>
  );
}
