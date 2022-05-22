import { CartContext } from "context/CartContext";
import React, { useContext } from "react";
import styles from "../styles/Home.module.css";

type CardProp = {
    thumbnailImage: string;
    objectID: string;
    name: string;
    salePrice: number;
};

export const Card: React.FC<CardProp> = (props) => {
    const { state, methods } = useContext(CartContext);

    const addItem = () => {
        methods.addItem({
            id: props.objectID,
            thumbnailUrl: props.thumbnailImage,
            name: props.name,
            price: props.salePrice,
        });
    };

    const AddOrRemoveButton = () => {
        if (state.elements.find((element) => element.id === props.objectID)) {
            return <button>Retirer du panier</button>;
        } else {
            return <button onClick={addItem}>Ajouter au panier</button>;
        }
    };

    return (
        <div className={styles.card}>
            <h3>{props.name}</h3>
            <AddOrRemoveButton />
        </div>
    );
};
