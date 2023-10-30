import React from 'react';
import './style.css';

const Banner = (props) => {
    return(
        <div className = "w-100 position-relative banner-container">
            <img src = {props.bannerImageName} className="w-100 banner-img object-fit-cover"/>
            <div className="w-100 image-overlay position-absolute">
            </div>
            <h1 className='fs-1 fw-bold position-absolute'>{props.bannerText}</h1>
        </div>
    );
}

export default Banner;