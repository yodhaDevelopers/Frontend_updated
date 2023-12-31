import { Link } from 'react-router-dom';

const EmptyCart = () => {
    return (
        <div className="flex items-center flex-col gap-2 m-6">
            <div className="w-52 h-44">
                <img draggable="false" className="w-full h-full object-contain" src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png" alt="No orders placed" />
            </div>
            <span className="text-lg">You have not placed any orders!</span>
            <p className="text-xs">Place Orders Now.</p>

        </div>
    );
};

export default EmptyCart;