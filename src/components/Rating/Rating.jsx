import React from 'react';
import star from '../../assets/golden-star.png';
import S from './Rating.module.css';

const Rating = () => {
  return (
    <span className={S.rating}>
      <i>
        <a href="#">
          <img src={star} />
        </a>
        <a href="#">
          <img src={star} />
        </a>
        <a href="#">
          <img src={star} />
        </a>
        <a href="#">
          <img src={star} />
        </a>
        <a href="#">
          <img src={star} />
        </a>
      </i>
    </span>
  );
};

export default Rating;
