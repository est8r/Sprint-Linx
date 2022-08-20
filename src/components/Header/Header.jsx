import React from 'react';
import S from './Header.module.css';
import Button from '../Button/Button.jsx';
import Menu from '../Menu/Menu';

const Header = () => {
  return (
    <header className={S.header}>
      <Menu />
      <h2 className={S.h2}>uma seleção de produtos</h2>
      <h1 className={S.h1}>
        especial para <span className={S.diff}>você</span>
      </h1>
      <p className={S.p}>
        Todos os produtos desta lista foram selecionados a partir da sua
        navegação.
      </p>
      <div className={S.div}>
        <span className={S.span}>Como fazemos isso?</span>
        <Button className={S.button} content={'Saiba Mais'} />
      </div>
    </header>
  );
};

export default Header;
