import React from 'react';
import Label from '../Label/Label.jsx';
import Input from '../Input/Input';
const Form = () => {
  return (
    <form>
      <div>
        <Label texto="Seu Nome" />
        <Input id="name" type="text" />
      </div>
      <div>
        <Label texto="Email" />
        <Input id="email" type="email" />
      </div>
      <div>
        <Label texto="CPF" />
        <Input id="cpf" type="text" />
      </div>

      <section>
        <div>
          <Input id="fem" name="radio" type="radio" />
          <Label texto="Feminino" />
        </div>
        <div>
          <Input id="masc" name="radio" type="radio" />
          <Label texto="Masculino" />
        </div>
      </section>
    </form>
  );
};

export default Form;
