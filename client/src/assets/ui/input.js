import React from 'react';
import styled from 'styled-components';

const Input = ({ name, value, type, placeholder, onChange, textarea }) => {
  const content = textarea 
    ? <textarea name={name} value={value} type={type || 'text'} placeholder={placeholder} onChange={(e) => onChange(e)}></textarea>
    : <input name={name} value={value} type={type || 'text'} placeholder={placeholder} onChange={(e) => onChange(e)} ></input>

  return (
    <InputWrapper>
      <label>{content}</label>
    </InputWrapper>     
  )
}

const InputWrapper = styled.div`
  input, textarea {
    background: transparent;
    border: 2px solid #46b156;
    border-radius: 5px;
    color: #828684;
    font-size: 14px;
    font-weight: 600;
    padding: 6px 10px;
    margin-bottom: 10px;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }
  label {
    display: block;
    position: relative;
    &:after {
      content: '*';
      color: #d04141;
      position: absolute;
      top: 8px;
      right: 10px;
    }
  }
`

export default Input;