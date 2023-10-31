import React from "react";
import './style.css'

const Card = (props) => {

  let bgColor = 'var(--color-primary)'
  if (props.bgColor === "secondary") {
    bgColor = 'var(--color-secondary)'
  } else if (props.bgColor === 'secondary2') {
    bgColor = 'var(--color-secondary2)'
  }

  return (
    <div 
      className="card d-flex flex-column justify-content-end" 
      style={{background: bgColor}}
    >
      <div class="content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;