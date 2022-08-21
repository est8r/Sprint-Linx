import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Products = () => {
  const [card, setNewCard] = useState([]);
  const [section, setSection] = useState(1);

  const handleReq = async () => {
    const url = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1${section}`;
    const response = await fetch(url);
    const json = await response.json();
    setNewCard([...card, ...json.products]);
  };

  return (
    <div>
      <div>); })}</div>
    </div>
  );
};

export default Products;
