import React from 'react'

export const TaskRow = props => (
  <tr key={this.props.task.name}>
    <td>{this.props.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={this.props.task.done}
        onChange={() => this.props.toggleTask(this.props.task)}
      />
    </td>
  </tr>
)
