import React, { Fragment } from "react"

// components
import ImageDescription from "../../components/ImageDescription"

function Services() {
  return (
    <Fragment>
      <ImageDescription 
        title="Internship Opportunities"
        description="eMarketplace"

        imageUrl="#"
        imageWidth="400px"
        imageHeight="400px"
        imagePos="right"
      />
      <ImageDescription 
        title="Technical Consultancy"
        description="Heystack is a startup that prides itself as the Next-Gen Knowledge-Skill-Based Hiring Disruptor Platform that looks to open a robust eMarketplace for students to source for overseas internship opportunities."

        imageUrl="#"
        imageWidth="360px"
        imageHeight="360px"
        imagePos="left"
      />
    </Fragment>
  );
}

export default Services;