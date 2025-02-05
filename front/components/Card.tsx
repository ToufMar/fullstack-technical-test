import { CartContext } from "context/CartContext";
import React, { useContext } from "react";
import styles from "../styles/Home.module.css";
import buttonStyles from "../styles/Button.module.css";
type CardProp = {
    thumbnailImage: string;
    objectID: string;
    name: string;
    salePrice: number;
};

export const Card: React.FC<CardProp> = (props) => {
    const { state, methods } = useContext(CartContext);

    const addItem = () => {
        methods.addItem(props.objectID, {
            thumbnailUrl: props.thumbnailImage,
            name: props.name,
            price: props.salePrice,
            quantity: 1,
            id: props.objectID,
        });
    };

    const removeItem = () => {
        methods.removeItem(props.objectID);
    };

    const AddOrRemoveButton = () => {
        if (state.elements.find((element) => element.id === props.objectID)) {
            return (
                <button className={buttonStyles.button_delete} onClick={removeItem}>
                    Retirer du panier
                </button>
            );
        } else {
            return (
                <button className={buttonStyles.button_add} onClick={addItem}>
                    Ajouter au panier
                </button>
            );
        }
    };

    return (
        <div className={styles.card}>
            <img src={props.thumbnailImage} />
            <h4>{props.name}</h4>
            <h4>{props.salePrice} Euros</h4>
            <AddOrRemoveButton />
        </div>
    );
};
