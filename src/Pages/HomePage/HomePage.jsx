import './HomePage.css';
import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import MainSlider from '../../Components/MainSlider/MainSlider';
import PromoSlide from '../../Components/PromoSlide/PromoSlide';

const HomePage = () => {
  return (
    <>
    <NavBar />
    <MainSlider />
    <PromoSlide />
    <div style={{ height: '200vh'}}></div>
    </>
  )
}

export default HomePage