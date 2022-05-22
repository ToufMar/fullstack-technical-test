import React, { createContext, useState, Dispatch, useEffect } from "react";

type Item = {
    thumbnailUrl: string;
    name: string;
    price: number;
    id: string;
};

type Cart = Item[];

type CartState = {
    error: boolean | null;
    loading: boolean;
    elements: Item[];
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
    const addItem = async (id: string, body: any): Promise<void> => {
        setCartState({ ...cartState, error: null, loading: true });
        fetch(apiUrl + "/" + id, { mode: "cors", method: "POST", body: JSON.stringify({ item: body }), headers: { "Content-Type": "application/json" } })
            .then((d) => d.json())
            .then((d) => setCartState({ elements: d.items, loading: false, error: false }))
            .catch((e) => setCartState({ elements: [], error: true, loading: false }));
    };

    const removeItem = async (id: string) => {
        setCartState({ ...cartState, error: null, loading: true });
        fetch(apiUrl + "/" + id, { mode: "cors", method: "DELETE" })
            .then((d) => d.json())
            .then((d) => setCartState({ elements: d.items, loading: false, error: false }))
            .catch((e) => setCartState({ elements: [], error: true, loading: false }));
    };

    return <CartContext.Provider value={{ state: cartState, methods: { setCartState, addItem, removeItem } }}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
