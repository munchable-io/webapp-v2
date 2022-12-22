import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLocalCart } from "../features/users/users.slice";
import axios from "../features/api/axios";

const CheckoutPage = () => {
    const cart = useSelector(getLocalCart);

    useEffect(() => {
        const getStripeUrl = async () => {
            // create order for api
            const order = cart.map((item) => ({
                name: item?.name,
                price: Math.round(item?.price * 100),
                qty: item?.qty,
                taxRates: ["txr_1ME040DHS9nkPMw6773fn4JZ"],
            }));
            const payload = {
                cancelUrl: "https://www.google.com",
                successUrl: "https://www.google.com",
                order,
            };

            try {
                const response = await axios.post("/payment/pay", payload);
                const { url } = response.data;
                console.log(url);
            } catch (err) {
                console.warning(err);
            }
        };

        getStripeUrl();
    }, []); //eslint-disable-line

    return (
        <>
            <div className="container">
                <p>Redirecting to stripe...</p>
            </div>
        </>
    );
};

export default CheckoutPage;
