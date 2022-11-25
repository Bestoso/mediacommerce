import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {

const [cart, setCart] = useState([]);
const [price, setPrice] = useState(0);
const [quantity, setQuantity] = useState(0);

const isInCart = (item) => {
    return cart.some((cartItem) => cartItem.item.id === item.id);
};                                                                           

const addItem = (item, quantity = 1) => {
    if (isInCart(item)){
        setCart(cart.map((cartItem) => {
            if (cartItem.item.id === item.id){
                setPrice(price + item.price * quantity);
                setQuantity(calcTotalQuantity());
                return {
                    item,
                    quantity: cartItem.quantity + quantity,
                };
            }
            return cartItem;
        }));
    } else {
        setCart([...cart, { item, quantity }]);
        setPrice(price + item.price * quantity);
        setQuantity(calcTotalQuantity());
    }
};

const calcTotalQuantity = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 1);
};

const clear = () => {
    setCart([]);
    setPrice(0);
    setQuantity(0);
};

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            price,
            setPrice,
            quantity,
            setQuantity,
            addItem,
            clear,
        }}>
            {children}
        </CartContext.Provider>
    );
};
