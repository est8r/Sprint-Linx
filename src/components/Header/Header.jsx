import React from 'react';
import Menu from '../Menu/Menu';
import S from './Header.module.css';
const Header = () => {
  return (
    <header className={S.header}>
      <h2 className={S.h2}>uma seleção de produtos</h2>
      <h1 className={S.h1}>especial para voce</h1>
      <p className={S.p}>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação. Aproveite!
      </p>
      <Menu />
    </header>
  );
};

export default Header;
