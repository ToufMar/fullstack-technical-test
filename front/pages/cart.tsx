import { CartContext } from "context/CartContext";
import { useContext } from "react";
import stylesCart from "../styles/Cart.module.css";
import stylesHome from "../styles/Home.module.css";

export default function Cart() {
    const { state, methods } = useContext(CartContext);

    //TODO mettre dans un layout
    if (state.elements?.length === 0 && state.loading) {
        return <main className={stylesHome.main}>Loading</main>;
    }
    //TODO mettre dans un layout
    if (state.elements?.length === 0 && !state.loading) {
        return (
            <main className={stylesHome.main}>
                <h1>Vous n'avez rien dans votre panier</h1>
            </main>
        );
    }
    //TODO mettre dans un layout
    if (state.error) {
        return (
            <main className={stylesHome.main}>
                <h1>Une erreur s'est produite</h1>
            </main>
        );
    }

    const removeItem = (id: string) => {
        methods.removeItem(id);
    };

    return (
        <main className={stylesHome.main}>
            <h1>Mon Panier: {state.elements.length} élements.</h1>
            <div className={stylesCart.cart}>
                {state?.elements.map((element, index) => (
                    <div className={stylesCart.item} key={index}>
                        <img></img>
                        <h3>{element.name}</h3>
                        <p>{element.price}</p>
                        <button onClick={() => removeItem(element.id)} className={stylesCart.button_delete}>
                            Retirer du panier
                        </button>
                    </div>
                ))}
            </div>
            <h1>TOTAL: {state.elements.reduce((acc, curr) => acc + curr.price, 0)} Euros</h1>
        </main>
    );
}
