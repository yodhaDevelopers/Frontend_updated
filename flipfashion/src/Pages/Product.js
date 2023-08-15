import React from "react";
import { useStateValue } from "../StateProvider";


function Product({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className="product flex flex-col items-start gap-2 px-4 py-6 relative hover:shadow-lg rounded-sm">
            <div className="product__info flex flex-col items-center text-center group">
                <div className="w-44 h-48">
                    <img draggable="false" className="w-full h-full object-contain" src={image} alt="Product Item" />
                </div>
                <h2 className="text-sm mt-4 group-hover:text-primary-blue text-left">{title}</h2>
            </div>
            <div className="flex flex-col gap-2 items-start">

                <span className="text-sm text-gray-500 font-medium flex gap-2 items-center">

                    <div className="text-xs px-1.5 py-0.5 bg-primary-green rounded-sm text-white flex items-center gap-0.5">
                        {Array(rating)
                            .fill()
                            .map((_, i) => (
                                <p>🌟</p>
                            ))}

                    </div>

                </span>

                <div className="flex items-center gap-1.5 text-md font-medium">

                    <span>₹{price.toLocaleString()}</span>
                </div>

            </div>

            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;