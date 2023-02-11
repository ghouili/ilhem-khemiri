import "./MainSlider.css";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import Laptop from "../../Assets/Images/laptop.png";
import Camera from "../../Assets/Images/camera.png";
import Watche from "../../Assets/Images/watche.png";
import TV from "../../Assets/Images/tv.png";

const MainSlider = () => {
  const transition = { duration: 2, type: "spring" };
  return (
    // <Testing />
    <div className="mainslider">
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        grabCursor={true}
        navigation={true}
        spaceBetween={5}
        loop={true}
        slidesPerView={1}
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {/* Laptop  */}
        <SwiperSlide>
          <div className="slide-txt">
            <motion.span
              initial={{ left: "25%", top: "-10%" }}
              whileInView={{ left: "25%", top: "10%" }}
              transition={transition}
              className="slide-maintitle"
            >
              Laptops
            </motion.span>
            <motion.span
              initial={{ left: "0", top: "35%" }}
              whileInView={{ left: "15%", top: "35%" }}
              transition={transition}
              className="slide-subtitle"
            >
              Transform Your Computing Experience
              <br /> with Cutting-Edge Laptops
            </motion.span>
          </div>
          <motion.img
            initial={{ right: "15%", top: "-25%" }}
            whileInView={{ right: "15%", top: "25%" }}
            transition={transition}
            style={{ transform: "scale(1.5)" }}
            src={Laptop}
            alt="background"
          />
        </SwiperSlide>
        {/* Cameraa */}
        <SwiperSlide>
          <div className="slide-txt">
            <motion.span
              initial={{ left: "25%", top: "-10%" }}
              whileInView={{ left: "25%", top: "10%" }}
              transition={transition}
              className="slide-maintitle"
            >
              Cameras
            </motion.span>
            <motion.span
              initial={{ left: "0", top: "35%" }}
              whileInView={{ left: "15%", top: "35%" }}
              transition={transition}
              className="slide-subtitle"
            >
              Preserve Your Memories with the best
              <br />
              Camera Technology
            </motion.span>
          </div>
          <motion.img
            initial={{ right: "15%", top: "-25%" }}
            whileInView={{ right: "15%", top: "25%" }}
            transition={transition}
            style={{ transform: "scale(1.7)" }}
            src={Camera}
            alt="background"
          />
        </SwiperSlide>
        {/* Watches */}
        <SwiperSlide>
          <div className="slide-txt">
            <motion.span
              initial={{ left: "22%", top: "-10%" }}
              whileInView={{ left: "22%", top: "10%" }}
              transition={transition}
              className="slide-maintitle"
            >
              Wearable Watches
            </motion.span>
            <motion.span
              initial={{ left: "0", top: "35%" }}
              whileInView={{ left: "15%", top: "35%" }}
              transition={transition}
              className="slide-subtitle"
            >
              Elevate Your Fitness Game with Wearable Watches <br /> Built for
              Performance
            </motion.span>
          </div>
          <motion.img
            initial={{ right: "15%", top: "-25%" }}
            whileInView={{ right: "15%", top: "25%" }}
            transition={transition}
            style={{ transform: "scale(1.3)" }}
            src={Watche}
            alt="background"
          />
        </SwiperSlide>
        {/* Smart TV */}
        <SwiperSlide>
          <div className="slide-txt">
            <motion.span
              initial={{ left: "24%", top: "-10%" }}
              whileInView={{ left: "24%", top: "10%" }}
              transition={transition}
              className="slide-maintitle"
            >
              Smart TVs
            </motion.span>
            <motion.span
              initial={{ left: "0", top: "35%" }}
              whileInView={{ left: "15%", top: "35%" }}
              transition={transition}
              className="slide-subtitle"
            >
              Transform Your Viewing Experience with <br />
              Cutting-Edge Smart TVs
            </motion.span>
          </div>
          <motion.img
            initial={{ right: "15%", top: "-25%" }}
            whileInView={{ right: "15%", top: "20%" }}
            transition={transition}
            style={{ transform: "scale(1.7)" }}
            src={TV}
            alt="background"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainSlider;
