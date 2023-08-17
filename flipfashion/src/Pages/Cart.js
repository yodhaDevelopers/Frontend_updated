import React from "react";

import { useStateValue } from "../StateProvider";
import CartProduct from "./CartProduct";
import { useNavigate } from "react-router-dom";
import EmptyCart from "./Components/EmptyCart";

function Cart({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();

    const placeOrderHandler = () => {

        dispatch({
            type: "PLACE_ORDER",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        navigate('/');
    }


    return (
        <>
            <main className="w-full mt-20">


                <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">


                    <div className="flex-1">


                        <div className="flex flex-col shadow bg-white">
                            <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">My Cart ({basket.length})</span>

                            {basket && basket.length === 0 && (
                                <EmptyCart />
                            )}

                            {basket.map(item => (
                                <CartProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}


                            <div className="flex justify-center">
                                <button onClick={placeOrderHandler} disabled={basket.length < 1 ? true : false} className={`${basket.length < 1 ? "bg-blue-500 cursor-not-allowed" : "bg-orange-500"} w-full sm:w-1/3 mx-2 sm:mx-6 my-4 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm`}>PLACE ORDER</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main></>
    );
}

export default Cart;