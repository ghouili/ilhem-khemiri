import "./Dropdown.css";
import React, { useState } from "react";
// import ArrowDown from "@iconscout/react-unicons/icons/uil-angle-down";
import ArrowUp from "@iconscout/react-unicons/icons/uil-angle-up";
import Cross from "@iconscout/react-unicons/icons/uil-times";

const categories = [
  { value: "Smartphones", label: "Smartphones" },
  { value: "Laptops and ", label: "Laptops and Computers" },
  { value: "Tablets", label: "Tablets" },
  { value: "Wearables", label: "Wearables" },
  { value: "Home Automation", label: "Home Automation" },
  { value: "Smart TVs", label: "Smart TVs" },
  { value: "Audio and Sound Systems", label: "Audio and Sound Systems" },
  { value: "Smart Home Security", label: "Smart Home Security" },
  {
    value: "Virtual and Augmented Reality Devices",
    label: "Virtual and Augmented Reality Devices",
  },
  {
    value: "Gaming and Entertainment Systems",
    label: "Gaming and Entertainment Systems",
  },
  { value: "Health and Fitness Devices", label: "Health and Fitness Devices" },
  {
    value: "Cameras and Photography Equipment",
    label: "Cameras and Photography Equipment",
  },
  {
    value: "Office and Productivity Tools",
    label: "Office and Productivity Tools",
  },
  {
    value: "Automotive and Transportation Tech",
    label: "Automotive and Transportation Tech",
  },
  { value: "Robotics and Drones", label: "Robotics and Drones" },
];

const Dropdown = () => {
  const options =categories;
  const [value, setValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);
  // const [empty, setEmpty] = useState(false);

  const handleInputChange = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setFilteredOptions(options);
    } else {
      setFilteredOptions(
        options.filter((option) =>
          option.label.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
    // if (filteredOptions.length != 0) {
    //   setEmpty(true)
    // } else {
    //   setEmpty(false)
    // }
    setShowOptions(true);
    
  };

  const ToggleOptions = () => {
    console.log("clicked");
    console.log(showOptions);
    // if (!empty) {

    setShowOptions(!showOptions);
    // }
  };

  const handleClickOutside = (e) => {
    if (!e.target.closest(".dropdown")) {
      setShowOptions(false);
    }
  };

  const handleOptionClick = (option) => {
    setValue(option.label);
    setShowOptions(false);
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div className="dropdown">
      <input
        type="text"
        value={value}
        onClick={ToggleOptions}
        onChange={handleInputChange}
        placeholder="Categories"
        className="dropdown__input"
      />
      {showOptions && (
        <ul className="dropdown__options">
          {filteredOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="dropdown__option"
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      <div className="arrowDown">
        <div className="ToggleOption" onClick={() => ToggleOptions()}>
          {showOptions && filteredOptions.length !== 0 ?  (
            <ArrowUp color="#5c5c5c" size="28px" />
          ) : null}
        </div>
        {value.length === 0 ? null : (
          <Cross color="#DA1F26" onClick={() => setValue("")} />
        )}
      </div>
    </div>
  );
};

export default Dropdown;
