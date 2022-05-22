import { CartContext } from "context/CartContext";
import React, { useContext } from "react";
import headerStyles from "../styles/Header.module.css";
import buttonStyles from "../styles/Button.module.css";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import CartLogo from "../img/shooping.png";
import Image from "next/image";
export const Header: React.FC = () => {
    const { state } = useContext(CartContext);
    const router = useRouter();

    const goBack = () => {
        router.back();
    };

    return (
        <div className={headerStyles.header}>
            <div className={headerStyles.header_logo}>
                {router.pathname === "/cart" && (
                    <button className={buttonStyles.button_back} onClick={goBack}>
                        Retour aux produits
                    </button>
                )}
            </div>
            <h1>Un Joli Site de E-Commerce</h1>
            <div className={headerStyles.header_cart}>
                <Link href={"/cart"}>
                    <div className={headerStyles.header_cart_content}>
                        <Image src={CartLogo} height={50} width={50} />
                        <p>{state.elements.length}</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};
