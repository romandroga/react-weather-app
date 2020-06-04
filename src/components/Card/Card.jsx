import React from 'react';
import { Link } from 'react-router-dom';
import { card } from './Card.module.css';

const Card = ({ city }) => (
  <Link to={`/${city.id}`}>
    <li key={city.id} className={card}>
      <p>{city.name}</p>
      <p>{city.main.temp}C</p>
    </li>
  </Link>
);

export default Card;
