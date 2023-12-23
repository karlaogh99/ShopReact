import { useContext } from 'react';
import {Context} from "../component/Context";

export const useRemoveProduct = () => {
    const {cart, setCart} = useContext(Context);
    const { resetCarrito  } = useContext(Context);

    const removeProduct =  (product) => {
        const tempCart = cart.filter(item => item !== product);
        setCart(prevCart => prevCart.filter(item => item !== product));


        if (tempCart.length === 0) {
            resetCarrito();
            return true;
        }

    };

    return removeProduct;

}
