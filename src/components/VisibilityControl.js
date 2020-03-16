import React from 'react'

export const VisibilityControl = PropTypes => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={PropTypes.isChecked}
        onChange={e => PropTypes.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">Ver {PropTypes.description}</label>
    </div>
  )
}
