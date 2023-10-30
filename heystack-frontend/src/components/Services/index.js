import React from "react";
import Banner from "../Banner/index.js";
import SampleBanner from "../../assets/images/sample-banner.jpg";

const Services = () => {

    return (
        <div>
            <Banner bannerImageName={SampleBanner} bannerText="Services" />
        </div>
    )
}

export default Services;