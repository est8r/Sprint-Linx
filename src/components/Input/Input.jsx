import React from 'react';
import S from './Input.module.css';

const Input = ({ id, type }) => {
  return <input className={S.input} id={id} type={type} />;
};

export default Input;
