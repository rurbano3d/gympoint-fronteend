import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import CurrencyInput from 'react-currency-input';

import { useField } from '@rocketseat/unform';

export default function Currency({ name, ...rest }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [amount, setAmount] = useState(defaultValue);
  console.tron.log(amount);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.value',
    });
  }, [fieldName, ref.current]); // eslint-disable-line

  function handleChange(e) {
    console.tron.log(e.target.value);
    const { value } = e.target;
    return setAmount(value);
  }

  return (
    <>
      <CurrencyInput
        name={fieldName}
        onChangeEvent={e => handleChange(e)}
        value={amount}
        decimalSeparator="."
        thousandSeparator=","
        ref={ref}
        {...rest}
      />
      {error && <span>{error}</span>}
    </>
  );
}
Currency.propTypes = {
  name: PropTypes.string.isRequired,
};
