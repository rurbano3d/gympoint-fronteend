import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import api from '~/services/api';

export default function Teste() {
  const [inputValue, setInputValue] = useState('');

  async function loadOptions() {
    const response = await api.get('/students', {
      params: { q: inputValue },
    });
    const newStudents = response.data.map(s => ({
      id: s.id,
      label: s.name,
    }));
    return newStudents;
  }

  function handleChange(value) {
    setInputValue(value.replace(/\W/g, ''));
  }
  return (
    <>
      <span>{inputValue}</span>
      <AsyncSelect
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onInputChange={handleChange}
      />
    </>
  );
}
