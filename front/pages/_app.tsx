import { Header } from "components/header";
import { CartProvider } from "context/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Header />
            <Component {...pageProps} />
        </CartProvider>
    );
}

export default MyApp;
