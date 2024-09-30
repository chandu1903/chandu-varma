// Card.js
import React from 'react';
import share from "./share.png";
import git from "./github.png";
import './card.css'; // Import the CSS file for styling

const Card = ({ image,title, description,l1,l2,l3}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <div className='langues'>
        <p className='lang'>{l1}</p>
        <p className='lang'>{l2}</p>
        <p className='lang'>{l3}</p>
        </div>
        <div className='details-prjt'>
          <img src={share} alt="*"/>
          <span><p className='link'>Live Site</p></span>
          <img src={git} alt="*" className='git-img'/> 
          <span><p>Source Code</p></span>
        </div>
      </div>
    </div>
  );
};

export default Card;
