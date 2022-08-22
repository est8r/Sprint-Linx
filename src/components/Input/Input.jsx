import React from 'react';
import S from './Input.module.css';

const Input = ({ id, type, value, error, onChange, onBlur, placeholder }) => {
  return (
    <>
      <input
        className={S.input}
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <p className={S.p}>{error}</p>}
    </>
  );
};

export default Input;
