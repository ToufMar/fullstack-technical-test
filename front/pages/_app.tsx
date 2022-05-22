import { Footer } from "components/footer";
import { Header } from "components/header";
import { CartProvider } from "context/CartContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </CartProvider>
    );
}

export default MyApp;
