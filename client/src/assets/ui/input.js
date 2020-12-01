import React from 'react';
import styled from 'styled-components';

const Input = ({ value, type, placeholder, onChange }) => {
  return (
    <InputWrapper>
      <input type={type} placeholder={placeholder} onChange={e => onChange(e.target.value)}/>
    </InputWrapper>     
  )
}

const InputWrapper = styled.div`
  input {
    background: transparent;
    border: 2px solid #46b156;
    border-radius: 5px;
    color: #828684;
    font-size: 14px;
    font-weight: bold;
    padding: 6px 10px;
    margin-bottom: 10px;
    width: 100%;
    &:focus {
      border-color: #828684;
      outline: none;
    }
  }
`

export default Input;