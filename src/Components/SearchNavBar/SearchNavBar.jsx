import "./SearchNavBar.css";
import React from "react";
import Phone from "@iconscout/react-unicons/icons/uil-phone";
import Search from "@iconscout/react-unicons/icons/uil-search-alt";
import Dropdown from "../Dropdown/Dorpdown";

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
const PhoneNumber = 56561226;

const SearchNavBar = () => {
  const handleClick = () => {
    if (isMobile) {
      window.location.href = "tel:+216" + PhoneNumber;
    } else {
      // display a message or alternative actions for non-mobile devices
      alert("This feature is not available on desktop devices.");
    }
  };
  return (
    <>
    <div className="secondNav">
        <div className="s-left2">
          <span>Atech</span>
        </div>
        <div className="s-right2" onClick={handleClick}>
          <Phone size="17px" />
          <span> +216 56 561 226</span>
        </div>
      </div>
      <div className="SearchNavbar">
        <div className="s-left">
          <span>Atech</span>
        </div>
        <div className="s-middle">
          <Dropdown />
          <Dropdown />
          <div className="search">
            <button className="search-button">
              <span>Search</span>
            </button>
            <Search className="searchIcon" color="#fff" size="20px" />
          </div>
        </div>
        <div className="s-right" onClick={handleClick}>
          <Phone size="17px" />
          <span> +216 56 561 226</span>
        </div>
      </div>
      
    </>
  );
};

export default SearchNavBar;
