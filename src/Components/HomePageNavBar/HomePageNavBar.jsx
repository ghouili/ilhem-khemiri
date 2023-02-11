import "./HomePageNavBar.css";
import React from "react";
import { motion } from "framer-motion";
import User from "@iconscout/react-unicons/icons/uil-user";
import AddUser from "@iconscout/react-unicons/icons/uil-user-plus";
import Cart from "@iconscout/react-unicons/icons/uil-shopping-cart";
const HomePageNavBar = () => {
  const transition = { duration: 2, type: "spring" };
  const loggedIn = false;
  return (
    <div className="HomePageNavBar">
      <div className="h-left">
        <motion.ul
          className="h-list"
          initial={{ left: "-50%" }}
          whileInView={{ left: "0" }}
          transition={transition}
        >
          <li>HOME</li>
          <li>ABOUT US</li>
          <li>CONTACT US</li>
          <li>BLOG</li>
        </motion.ul>
      </div>
      <div className="h-right">
        <motion.div
          className="h-rightInner"
          initial={{ right: loggedIn ? "-25%" : "-35%" }}
          whileInView={{ right: "4%" }}
          transition={transition}
        >
          {loggedIn && (
            <div className="h-signed">
              <div className="h-user">
                <img
                  src="https://i.pinimg.com/236x/c2/8d/b7/c28db700fcff3cdf1ebe5f834fac74a7.jpg"
                  alt=""
                />
                <span>Walid Top G</span>
              </div>
            </div>
          )}
          {!loggedIn && (
            <div className="h-notSigned">
              <div
                className="h-myaccount"
                // onClick={}
              >
                <AddUser size="20px" />
                <span>MY ACCOUNT</span>
              </div>
              <div
                className="h-login"
                // onClick={}
              >
                <User size="20px" />
                <span>LOG IN</span>
              </div>
            </div>
          )}

          <div
            className="h-cart"
            // onClick={}
          >
            <Cart size="23px" />
            <span>CART</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HomePageNavBar;
