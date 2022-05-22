import { CartContext } from "context/CartContext";
import React, { useContext } from "react";
import style from "../styles/Header.module.css";
import Link from "next/link";

export const Header: React.FC = () => {
    const { state } = useContext(CartContext);
    console.log(state);
    return (
        <div className={style.header}>
            <div className={style.header_logo}></div>
            <div className={style.header_cart}>
                <Link href={"/cart"}>
                    <p>
                        Mon Panier: {state.elements.length} element{state.elements.length > 1 ? "s" : ""}
                    </p>
                </Link>
            </div>
        </div>
    );
};
