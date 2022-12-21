import { FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { StyledCart } from "./Cart.styled";
import { getLocalCart, updateLocalCart } from "../../../users/users.slice";
import { useEffect } from "react";
import { setIsCheckoutOpen } from "../Header.slice";

const Cart = () => {
    const dispatch = useDispatch();
    const order = useSelector(getLocalCart);

    const getTotalQty = () => {
        let tot = 0;
        for (let item of order) {
            tot += item?.qty;
        }
        return tot;
    };

    useEffect(() => {
        dispatch(updateLocalCart());
    }, []); // eslint-disable-line

    return (
        <StyledCart onClick={() => dispatch(setIsCheckoutOpen(true))}>
            <FiShoppingCart />
            <span>{getTotalQty()}</span>
        </StyledCart>
    );
};

export default Cart;
