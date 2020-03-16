import React from 'react'

export const TaskRow = PropTypes => (
  <tr key={PropTypes.task.name}>
    <td>{PropTypes.task.name}</td>
    <td>
      <input
        type="checkbox"
        checked={PropTypes.task.done}
        onChange={() => PropTypes.toggleTask(PropTypes.task)}
      />
    </td>
    <td>
      <button
        className="btn btn-danger"
        onClick={() => PropTypes.deleteTask(PropTypes.task)}
      >
        Eliminar
      </button>
    </td>
  </tr>
)
