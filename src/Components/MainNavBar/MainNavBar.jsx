import "./MainNavBar.css";
import React from "react";

// import User from "@iconscout/react-unicons/icons/uil-user";
const MainNavBar = () => {
  const techEcommerce = [
    {
      category: "Computers",
      products: [
        { _id: 1, name: "Mac Pro" },
        { _id: 2, name: "Dell Precision" },
        { _id: 3, name: "HP Z Workstation" },
        { _id: 4, name: "Asus ProArt" },
        { _id: 5, name: "Acer ConceptD" },
      ],
    },
    {
      category: "Tablets",
      products: [
        { _id: 6, name: "iPad Pro" },
        { _id: 7, name: "Samsung Galaxy Tab S7" },
        { _id: 8, name: "OnePlus Tab" },
        { _id: 9, name: "Google Pixel Slate" },
        { _id: 10, name: "Xiaomi Mi Pad" },
      ],
    },
    {
      category: "Wearables",
      products: [
        { _id: 11, name: "Apple Watch Series" },
        { _id: 12, name: "Samsung Galaxy Watch" },
        { _id: 13, name: "Fitbit Sense" },
        { _id: 14, name: "Garmin Forerunner" },
        { _id: 15, name: "Amazfit Bip" },
      ],
    },
    {
      category: "Home Automation",
      products: [
        { _id: 16, name: "Amazon Echo" },
        { _id: 17, name: "Google Nest" },
        { _id: 18, name: "Samsung SmartThings" },
        { _id: 19, name: "Apple HomeKit" },
        { _id: 20, name: "Ring Alarm" },
      ],
    },
    {
      category: "Smart TVs",
      products: [
        { _id: 21, name: "Samsung QLED" },
        { _id: 22, name: "LG OLED" },
        { _id: 23, name: "Sony Bravia" },
        { _id: 24, name: "Vizio P-Series" },
        { _id: 25, name: "TCL Roku TV" },
      ],
    },
    {
      category: "Audio and Sound Systems",
      products: [
        { _id: 26, name: "Sonos Beam" },
        { _id: 27, name: "Bose Soundbar 700" },
        { _id: 28, name: "Yamaha YAS-209" },
        { _id: 29, name: "KEF LS50 Wireless" },
        { _id: 30, name: "Bang & Olufsen Beosound Stage" },
      ],
    },
    {
      category: "Smart Home Security",
      products: [
        { _id: 31, name: "Ring Video Doorbell" },
        { _id: 32, name: "Arlo Pro 3" },
        { _id: 33, name: "Nest Hello" },
        { _id: 34, name: "SimpliSafe Home Security" },
        { _id: 35, name: "ADT Smart Home Security" },
      ],
    },
    {
      category: "Virtual and Augmented Reality Devices",
      products: [
        { _id: 36, name: "Oculus Quest 2" },
        { _id: 37, name: "HTC Vive Pro" },
        { _id: 38, name: "PS VR" },
        { _id: 39, name: "Microsoft HoloLens 2" },
        { _id: 40, name: "Magic Leap One" },
      ],
    },
    {
      category: "Gaming and Entertainment Systems",
      products: [
        { _id: 41, name: "PlayStation 5" },
        { _id: 42, name: "Xbox Series X" },
        { _id: 43, name: "Nintendo Switch" },
        { _id: 44, name: "Raspberry Pi" },
        { _id: 45, name: "PC Gaming" },
      ],
    },
    {
      category: "Health and Fitness Devices",
      products: [
        { _id: 46, name: "Fitbit Charge 4" },
        { _id: 47, name: "Apple Watch Series" },
        { _id: 48, name: "Garmin Forerunner" },
        { _id: 49, name: "Withings Steel HR" },
        { _id: 50, name: "Jawbone UP3" },
      ],
    },
    {
      category: "Cameras and Photography Equipment",
      products: [
        { _id: 51, name: "Canon EOS R5" },
        { _id: 52, name: "Nikon Z7 II" },
        { _id: 53, name: "Sony A7S III" },
        { _id: 54, name: "Fujifilm X-T4" },
        { _id: 55, name: "Panasonic Lumix GH5" },
      ],
    },
    {
      category: "Office and Productivity Tools",
      products: [
        { _id: 56, name: "Microsoft Office 365" },
        { _id: 57, name: "Google Workspace" },
        { _id: 58, name: "Adobe Creative Cloud" },
        { _id: 59, name: "Slack" },
        { _id: 60, name: "Trello" },
      ],
    },
    {
      category: "Automotive and Transportation Tech",
      products: [
        { _id: 61, name: "Tesla Model S" },
        { _id: 62, name: "Nissan LEAF" },
        { _id: 63, name: "Chevrolet Bolt" },
        { _id: 64, name: "BMW i3" },
        { _id: 65, name: "Jaguar I-PACE" },
      ],
    },
    {
      category: "Robotics and Drones",
      products: [
        { _id: 66, name: "Autel Evo 2" },
        { _id: 67, name: "DJI Mavic Mini" },
        { _id: 68, name: "PowerVision PowerEye" },
        { _id: 69, name: "DJI Phantom 4" },
        { _id: 70, name: "Parrot Bebop" },
      ],
    },
  ];

  return (
    <div className="mainNav">
      <div className="m-navlist">
        <div className="m-listelement">
          <span>Home</span>
        </div>
        <div className="m-separator" />
        <div className="m-listelement">
          <span>Products</span>
          <div className="m-products">
            <div className="m-row">
              {techEcommerce.map((category, index) => (
                <div key={category.category} className="m-column">
                  <h3>{category.category}</h3>
                  <ul>
                    {category.products.map((product) => (
                      <li key={product._id}>{product.name}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="m-separator" />
        <div className="m-listelement">
          <span>about us</span>
        </div>
        <div className="m-separator" />
        <div className="m-listelement">
          <span>contact us</span>
        </div>
        <div className="m-separator" />
        <div className="m-listelement">
          <span>Blog</span>
        </div>
      </div>
    </div>
  );
};

export default MainNavBar;
