import React from 'react';
import Input from '../Input/Input.jsx';
import Label from '../Label/Label.jsx';
import Button from '../Button/Button.jsx';

const FriendForm = () => {
  return (
    <form>
      <p>
        Quer que seus amigos também ganhem a lista personalizada deles? Preencha
        agora!
      </p>
      <section>
        <div>
          <Label texto="Nome do amigo:" />
          <Input type="text" />
        </div>
        <div>
          <Label texto="E-mail do amigo:" />
          <Input type="email" />
        </div>
      </section>
      <Button content="Enviar" />
    </form>
  );
};

export default FriendForm;
