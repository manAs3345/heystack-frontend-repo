import React from "react";
import Banner from "../Banner/index.js";
import SampleBanner from "../../assets/images/sample-banner.jpg";
import "./style.css";

const AboutUs = () => {

    return (
        <div>
            <Banner bannerImageName={SampleBanner} bannerText="About Us" />
        </div>
    )
}

export default AboutUs;