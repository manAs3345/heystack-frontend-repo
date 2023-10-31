import React, { Fragment } from "react"
import './style.css'

// components
import ButtonPrimary from "../../components/Button/Primary";
import ButtonSecondary from "../../components/Button/Secondary";
import ImageDescription from "../../components/ImageDescription";
import Card from "../../components/Card";

function Home() {
  return (
    <Fragment>
      {/* About Heystack --> Link to AboutPage */}
      <ImageDescription 
        title="About Heystack"
        description="Heystack is a startup that prides itself as the Next-Gen Knowledge-Skill-Based Hiring Disruptor Platform that looks to open a robust eMarketplace for students to source for overseas internship opportunities."
        children={<ButtonSecondary text="More About Us" />}

        imageUrl="#"
        imageWidth="300px"
        imageHeight="380px"
        imagePos="right"
      />

      {/* What we Provide --> Link to ServicesPage */}
      <div className="services-link_container p-5 mt-4">
        <div className="d-flex flex-column align-items-center">
          <h2>What we Provide</h2>
          <p>Heystack is a startup that prides itself as the Next-Gen Knowledge-Skill-Based Hiring Disruptor Platform that looks to open a robust eMarketplace.</p>
          <ButtonPrimary text="Explore Services" />
        </div>
        <div className="services_cards-container mt-5 d-flex justify-content-center">
          <img src="#" alt="asset" />
          <Card 
            bgColor="secondary"
            title="Internship Opportunities"
            description="Heystack is a startup that prides itself as the Next-Gen Knowledge-Skill-Based Hiring Disruptor Platform that looks to open a robust eMarketplace."
            children=""
          />
          <Card 
            bgColor="secondary2"
            title="Technical Consulting"
            description="Heystack is a startup that prides itself as the Next-Gen Knowledge-Skill-Based Hiring Disruptor Platform that looks to open a robust eMarketplace."
            children=""
          />
        </div>
      </div>

      {/* Our Partners */}
      <div className="p-5 mb-4">
        <h2 className="text-center mb-4">Our Partners</h2>
        <div className="partners-container d-flex justify-content-center">
          <img src="#" alt="partner" />
          <img src="#" alt="partner" />
          <img src="#" alt="partner" />
        </div>
      </div>

      {/* Get in Touch --> Link to ContactPage */}
      <ImageDescription 
        title="Get in Touch"
        description="Heystack is a startup that prides itself as the Next-Gen Knowledge-Skill-Based Hiring Disruptor Platform that looks to open a robust eMarketplace for students to source for overseas internship opportunities."
        children={<ButtonSecondary text="Contact Us" />}

        imageUrl="#"
        imageWidth="450px"
        imageHeight="450px"
        imagePos="left"
      />
    </Fragment>
  );
}

export default Home;