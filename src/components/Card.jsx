import React from 'react';
import '../styles/Card.css';

import { IoFootball } from "react-icons/io5";
import { FaSwimmer } from "react-icons/fa";
import { GiRollerSkate } from "react-icons/gi";


const courses = [
  { 
    title: 'Fútbol',
    icon: <IoFootball />
  },
  { 
    title: 'Natación',
    icon: <FaSwimmer/>
  },
  { 
    title: 'Patín Artistico',
    icon: <GiRollerSkate />
  },
];

const Card = () => {
  return (
    <div className="card--container">
      {courses.map((item, index) => (
        <div className="card" key={index}>
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h2>{item.title}</h2>
            {item.duration && <p>{item.duration}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;