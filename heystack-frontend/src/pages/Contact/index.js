import React from "react"
import './style.css'

// components
import ButtonPrimary from "../../components/Button/Primary"

function Contact() {
  return (
    <div className="contact-container">
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Name</label>
          <input type="text" className="form-control" id="inputName" placeholder="Enter your name here" />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input type="email" className="form-control" id="inputEmail" placeholder="Enter your email here" />
        </div>
        <div className="form-group mb-5">
          <label htmlFor="inputMessage">Message</label>
          <textarea class="form-control" id="inputMessage" rows="3" placeholder="Enter your message here"></textarea>
        </div>
        <ButtonPrimary text="Contact Us" />
      </form>
      <div>
        <h2>Contact Us</h2>
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when printer took a galley of type and scrambled.</p>
        <span>&lt; Socials &gt;</span>
      </div>
    </div>
  );
}

export default Contact;