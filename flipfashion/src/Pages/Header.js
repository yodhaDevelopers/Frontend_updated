import React from "react";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import Searchbar from "./Components/Searchbar";

function Header() {

    const [{ basket, user }] = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <header className="bg-blue-700 fixed top-0 py-2.5 w-full z-10">

            <div className=" w-full sm:w-9/12 px-1 sm:px-4 m-auto flex  sm:w-9/12 px-1 sm:px-4 m-auto flex justify-between items-center relative">

                <div className="flex items-center flex-1">
                    <Link to="/" className="h-7 mr-1 sm:mr-4">
                        <img
                            className="h-full w-full object-contain"
                            src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipfashion"
                        />
                    </Link>
                    <Searchbar />
                </div>

                <div className="flex items-center justify-between ml-1 sm:ml-0 gap-0.5 sm:gap-7 relative">
                    {/* <span className=" px-3 sm:px-9 py-0.5 text-primary-blue  font-medium rounded-sm ">Welcome {!user ? ' Guest' : user.email}</span> */}

                    <Link to={'/login'} className="px-3 sm:px-9 py-0.5 text-primary-blue bg-white border font-medium rounded-sm cursor-pointer">

                        <div onClick={handleAuthenticaton} className="header__option">

                            <span >{user ? ' Sign Out' : ' Sign In'}</span>
                        </div>
                    </Link>

                    <Link to='/orders' className="flex items-center text-white font-medium gap-2 relative">
                        <div className="">
                            <span className="">Returns</span>
                            <span className="">& Orders</span>
                        </div>
                    </Link>

                    <Link to="/checkout" className="flex items-center text-white font-medium gap-2 relative">
                        <span>
                            <ShoppingCartOutlinedIcon /> </span>
                        <span className="w-5 h-5 p-2 bg-red-500 text-xs rounded-full absolute -top-2 left-3 flex justify-center items-center border">
                            {basket?.length}
                        </span>

                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;