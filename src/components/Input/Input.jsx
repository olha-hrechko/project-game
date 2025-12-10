import React from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = ({text, value, onChange, onClick, isShown, isSubmit, error, type='text', placeholder=''}) => {
  const isPassword = type === 'password';
  const inputType = isPassword && isShown ? 'text' : type;
  
  return (
     <div style={{marginBottom: '1.5rem', position: 'relative'}}>
      <label style={{
        display: 'block',
        fontSize: '1rem',
        fontWeight: '600',
        color: '#6b21a8',
        marginBottom: '0.5rem'
      }}>{text}</label>
      <div style={{position: 'relative'}}>
        <input 
          type={inputType} 
          placeholder={placeholder} 
          value={value} 
          onChange={onChange}
          className="game-input"
          style={{width: '100%', paddingRight: isPassword ? '3rem' : '1rem'}}
        />
        {isPassword && (
          <span 
            onClick={() => onClick(!isShown)}
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              color: '#7e22ce',
              fontSize: '1.25rem'
            }}
          >
            {isShown ? <FaEyeSlash /> : <FaEye />}
          </span>
        )}
      </div>
      {isSubmit && error && (
        <p style={{
          color: '#dc2626',
          fontSize: '0.875rem',
          marginTop: '0.5rem',
          marginLeft: '0.25rem'
        }}>{error}</p>
      )}
    </div>
  )
}

export default Input
