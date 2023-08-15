import React from "react";
import "./css/Checkout.css";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useNavigate } from "react-router-dom";

function Checkout() {
    const [{ basket, user }] = useStateValue();
    const navigate = useNavigate();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://miro.medium.com/max/700/1*rgSRBz1tpXptQcQZqOmdwA.gif"
                    alt="ad"
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your shopping basket is empty</h2>
                        <p>
                            You have no items in your basket. To buy one or add item to basket click the add to basket button
                        </p>
                    </div>
                ) : (
                    <div>
                        <h3>Hello, {user?.email}</h3>
                        <h2 className="checkout__title">Your shopping Basket</h2>

                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}

                    </div>
                )}
            </div>
            {basket?.length > 0 &&
                <div onClick={e => navigate("/payment")} className="checkout__right">

                </div>
            }
        </div>
    );
}

export default Checkout;