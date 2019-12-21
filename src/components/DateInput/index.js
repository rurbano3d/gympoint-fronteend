import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker, { registerLocale } from 'react-datepicker';
import PropTypes from 'prop-types';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { useField } from '@rocketseat/unform';

import 'react-datepicker/dist/react-datepicker.css';

import { Container } from './styles';

registerLocale('pt', pt);

export default function DateInput({ name, placeholder, value, onChange }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    if (value) {
      setSelected(parseISO(value));
    }
  }, [value]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onSelect={date => setSelected(date)}
        onChange={onChange}
        minDate={new Date()}
        ref={ref}
        placeholderText={placeholder}
        locale="pt"
        dateFormat="dd/MM/yyyy"
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

DateInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
};

DateInput.defaultProps = {
  placeholder: '',
  value: null,
};
