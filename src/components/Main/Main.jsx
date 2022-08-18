import React from 'react';
import Paragraph from '../Paragraph/Paragraph.jsx';
import S from './Main.module.css';

const Main = () => {
  return (
    <main className={S.main}>
      <Paragraph />
    </main>
  );
};

export default Main;
