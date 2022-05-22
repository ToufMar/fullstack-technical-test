import React, { createContext, useState, Dispatch, useEffect } from "react";

type Cart = {
    thumbnailUrl: string;
    name: string;
    price: number;
    id: string;
};

type CartState = {
    error: boolean | null;
    loading: boolean;
    elements: Cart[];
};

const CartState: CartState = {
    error: null,
    loading: true,
    elements: [],
};

const initialState: CartState = CartState;

type CartContext = {
    state: CartState;
    methods: Record<string, Function>;
};

const CartContext = createContext<CartContext>({ state: initialState, methods: {} });

const apiUrl = "http://localhost:4000/cart";

const CartProvider: React.FC = ({ children }) => {
    const [cartState, setCartState] = useState(initialState);

    useEffect(() => {
        setCartState({ ...cartState, error: null, loading: true });
        fetch(apiUrl)
            .then((d) => d.json())
            .then((d) => setCartState({ elements: d[0].items, loading: false, error: false }))
            .catch((e) => setCartState({ elements: [], error: true, loading: false }));
    }, []);

    // TODO typer le body
    const addItem = async (body: any): Promise<void> => {
        setCartState({ ...cartState, error: null, loading: true });
        fetch(apiUrl, { method: "POST", body: JSON.stringify(body) })
            .then((d) => d.json())
            .then((d) => setCartState({ elements: d[0].items, loading: false, error: false }))
            .catch((e) => setCartState({ elements: [], error: true, loading: false }));
    };

    return <CartContext.Provider value={{ state: cartState, methods: { setCartState, addItem } }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
