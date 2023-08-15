import "./App.css";
import Checkout from "./Pages/Checkout";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.js";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import FixedButton from "./FixedButton";

import Footer from "./Pages/Footer";



import Orders from "./Pages/Orders";


function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //Will only rum once the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("The user is : ", authUser);

      if (authUser) {
        //The user was Logged In / The user just Logged In

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //The user was logged out

        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="app">
        <Routes>

          <Route
            path="/orders"
            element={
              <>
                <Header />
                <FixedButton />
                <Orders />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <FixedButton />
                <Checkout />
              </>
            }
          ></Route>


          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <FixedButton />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;