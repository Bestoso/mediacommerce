import { createContext, useContext, useState } from "react";
import Swal from "sweetalert2"

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
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, clear it!'
    }).then((result) => {
        if (result.isConfirmed) {
            setCart([]);
            setPrice(0);
            setQuantity(0);
            Swal.fire(
                'Cleared!',
                'Your cart has been cleared.',
                'success'
            )
        }
    })
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
