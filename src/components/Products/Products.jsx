import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from '../Card/Card.jsx';

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
    </div>
  );
};

export default Products;
