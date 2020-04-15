import React from 'react'

function RadioBox({ label, isChecked, onChange }) {
  return (
    <label className="inline-flex items-center">
      <input
        className="mt-1 mr-2"
        type="radio"
        checked={isChecked}
        onChange={onChange}
        value={label}
      />
      <span className="text-sm">{label}</span>
    </label>
  )
}

export default RadioBox
