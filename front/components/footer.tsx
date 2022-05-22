import React from "react";
import homeStyles from "../styles/Home.module.css";

export const Footer = () => {
    // TODO mieux gérer le style du footer pour qu'il ne remonte pas lorsque le contenu de la page ne prend pas 100% ...

    return (
        <footer className={homeStyles.footer}>
            <p>Martin Rotureau</p>
            <p>22/05/2022</p>
        </footer>
    );
};
