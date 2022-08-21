import React from 'react';
import Button from '../Button/Button';
import Rating from '../Rating/Rating';
import S from './Card.module.css';

const Card = ({ img, name, description, oldValue, newValue, times, or }) => {
  return (
    <div className={S.div}>
      <Rating />
      <div className={S.img}>
        <img className={S.img} src={img} alt="produto" />
      </div>
      <h2 className={S.h2}>{name}</h2>
      <p className={S.desc}>{description}</p>
      <p className={S.oldValue}>{'R$ ' + oldValue + ',00'}</p>
      <h4 className={S.h4}>{'R$ ' + newValue + ',00'}</h4>
      <p className={S.p}>
        ou {times + 'x'} de: {'R$ ' + or}
      </p>
      <Button className={S.button} content="Comprar" />
    </div>
  );
};

export default Card;
