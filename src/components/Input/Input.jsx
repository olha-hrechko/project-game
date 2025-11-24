import React from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({text, value, onChange, onClick, isShown, isSubmit, error, type='text', placeholder=''}) => {
  const isPassword = type === 'password';
  const inputType = isPassword && isShown ? 'text' : type;
  
  return (
    <div>
      <label>{text}</label>
      <input 
        type={inputType} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange}
      />
      {isPassword && (
        isShown 
          ? <FaEyeSlash onClick={() => onClick(false)}/> 
          : <FaEye onClick={() => onClick(true)}/>
      )}
      {isSubmit && error && <p>{error}</p>}
    </div>
  )
}

export default Input
