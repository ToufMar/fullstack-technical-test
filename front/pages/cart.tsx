import { CartContext } from "context/CartContext";
import { useContext } from "react";
import stylesCart from "../styles/Cart.module.css";
import stylesHome from "../styles/Home.module.css";
import stylesButton from "../styles/Button.module.css";

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
                <div className={stylesCart.item}>
                    <div></div>
                    <h4>Nom du produit</h4>
                    <h4>Prix</h4>
                    <h4>Supprimer</h4>
                </div>
                {state?.elements.map((element, index) => (
                    <div className={stylesCart.item} key={index}>
                        <img src={element.thumbnailUrl}></img>
                        <h4>{element.name}</h4>
                        <p>{element.price}</p>
                        <button onClick={() => removeItem(element.id)} className={stylesButton.button_delete}>
                            Retirer du panier
                        </button>
                    </div>
                ))}
            </div>
            <h1>TOTAL: {state.elements.reduce((acc, curr) => acc + curr.price, 0)} Euros</h1>
        </main>
    );
}
