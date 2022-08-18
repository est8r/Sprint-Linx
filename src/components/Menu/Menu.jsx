import React from 'react';
import S from './Menu.module.css';
const Menu = () => {
  return (
    <div>
      <nav className={S.nav}>
        <button className={S.button}>Conheça a Linx</button>
        <button className={S.button}>Ajude o algoritmo</button>
        <button className={S.button}>Seus Produtos</button>
        <button className={S.button}>Compartilhe</button>
      </nav>
    </div>
  );
};

export default Menu;
