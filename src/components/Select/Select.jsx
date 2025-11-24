import React from 'react'

const Select = ({ text, options, onChange, value }) => {
  return (
    <div>
      <label>
        {text}
      </label>
        <select onChange={onChange} value={value}>
          {options.map((option, index) => (
            <option disabled={!index} key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
    </div>
  )
}

export default Select
