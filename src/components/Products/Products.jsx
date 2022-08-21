import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card.jsx';
import Button from '../Button/Button.jsx';
import Separator from '../Separator/Separator.jsx';
import S from './Products.module.css';

const Products = () => {
  const [card, setNewCard] = useState([]);
  const [section, setSection] = useState(1);

  const handleReq = async () => {
    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1${section}`;
    const response = await fetch(url);
    const json = await response.json();
    setNewCard([...card, ...json.products]);
  };

  function nextSection() {
    setSection(section + 1);
  }

  useEffect(() => {
    handleReq();
  }, [section]);

  return (
    <div>
      <Separator text="Sua seleção especial" />
      <div>
        {card.length > 0 &&
          card.map((card, index) => {
            return (
              <Card
                img={card.image}
                name={card.name}
                description={card.description}
                oldValue={card.oldPrice}
                newValue={card.price}
                times={card.installments.count}
                or={card.installments.value}
                key={index}
              />
            );
          })}
      </div>
      <Button onClick={nextSection} content="Ainda mais produtos aqui" />
      <Separator text="Compartilhe a novidade" />
    </div>
  );
};

export default Products;
