import React from 'react'

export const VisibilityControl = props => {
  return (
    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={this.props.isChecked}
        onChange={e => this.props.callback(e.target.checked)}
      />
      <label htmlFor="form-check-label">Ver {this.props.description}</label>
    </div>
  )
}
