import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const ButtonPrimary = (props) => {
  return (
    <Link className="heystack_btn heystack_btn-primary">{props.text}</Link>
  );
};

export default ButtonPrimary;