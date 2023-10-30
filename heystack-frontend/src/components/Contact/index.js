import React from "react";
import Banner from "../Banner/index.js";
import SampleBanner from "../../assets/images/sample-banner.jpg";

const Contact = () => {

    return (
        <div>
            <Banner bannerImageName={SampleBanner} bannerText="Contact" />
        </div>
    )
}

export default Contact;