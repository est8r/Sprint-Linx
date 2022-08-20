import React from 'react';
import Label from '../Label/Label.jsx';
import Input from '../Input/Input';
const Form = () => {
  return (
    <form className={S.form}>
      <div className={S.divInput}>
        <Label texto="Seu Nome" />
        <Input className={S.input} id="name" type="text" />
      </div>

      <div className={S.divInput}>
        <Label texto="Email" />
        <Input className={S.input} id="email" type="email" />
      </div>

      <div className={S.divInput}>
        <Label texto="CPF" />
        <Input className={S.input} id="cpf" type="text" />
      </div>

      <section className={S.sectionRadio}>
        <div className={S.divRadio}>
          <Input id="fem" name="radio" type="radio" />
          <Label texto="Feminino" />
        </div>
        <div className={S.divRadio}>
          <Input id="masc" name="radio" type="radio" />
          <Label texto="Masculino" />
        </div>
      </section>
    </form>
  );
};

export default Form;
