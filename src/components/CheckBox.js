import React from 'react'

function CheckBox({ label, isChecked, onChange }) {
  return (
    <label className="inline-flex items-center">
      <span className="mr-2">{label}</span>
      <input
        className="mt-1"
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        value={label}
      />
    </label>
  )
}

export default CheckBox
