import React from 'react';
import S from './Separator.module.css';

const Separator = ({ text }) => {
  return (
    <section className={S.section}>
      <span>
        <hr />
      </span>
      <h4 className={S.h4}>{text}</h4>
      <span>
        <hr />
      </span>
    </section>
  );
};

export default Separator;
