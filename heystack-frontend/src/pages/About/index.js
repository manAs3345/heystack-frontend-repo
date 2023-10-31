import React, { Fragment } from "react"

// components
import ImageDescription from "../../components/ImageDescription"

function About() {
  return (
    <Fragment>
      <ImageDescription 
        title="Heystack's Vision"
        description="Heystack is a startup that prides itself as the Next-Gen Knowledge-Skill-Based Hiring Disruptor Platform that looks to open a robust eMarketplace for students to source for overseas internship opportunities."

        imageUrl="#"
        imageWidth="370px"
        imageHeight="300px"
        imagePos="left"
      />
    </Fragment>
  );
}

export default About;