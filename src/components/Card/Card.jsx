import React from 'react';
import Button from '../Button/Button';

const Card = ({ img, name, description, oldValue, newValue, times, or }) => {
  return (
    <div>
      <div>
        <img src={img} alt="product" />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{'R$ ' + oldValue + ',00'}</p>
      <h4>{'R$ ' + newValue + ',00'}</h4>
      <p>
        ou {times + 'x'} de: {'R$ ' + or}
      </p>
      <Button content="Comprar" />
    </div>
  );
};

export default Card;
