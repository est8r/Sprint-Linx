import React from 'react';
import { useState } from 'react';

const types = {
  email: {
    regex:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'Email inválido',
  },
  cpf: {
    regex: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
    message: 'CPF inválido',
  },
};

return {};

export default useForm;
