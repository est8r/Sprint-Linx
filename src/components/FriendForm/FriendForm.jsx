import React from 'react';
import Input from '../Input/Input.jsx';
import Label from '../Label/Label.jsx';
import Button from '../Button/Button.jsx';
import S from './FriendForm.module.css';

const FriendForm = () => {
  return (
    <form className={S.form}>
      <p className={S.p}>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <section className={S.section}>
        <div className={S.divInput}>
          <Label texto="Nome do amigo:" />
          <Input type="text" />
        </div>
        <div className={S.divInput}>
          <Label texto="E-mail do amigo:" />
          <Input type="email" />
        </div>
      </section>
      <Button className={S.button} content="Enviar" />
    </form>
  );
};

export default FriendForm;
