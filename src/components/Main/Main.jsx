import React from 'react';
import Form from '../Form/Form.jsx';
import Paragraph from '../Paragraph/Paragraph.jsx';
import S from './Main.module.css';

const Main = () => {
  return (
    <main className={S.main}>
      <Paragraph />
      <Form />
    </main>
  );
};

export default Main;
