import React from 'react';

export const TaskRow = props => (
  <tr id='task-description' key={props.task.name}>
    <td>{props.task.name}</td>
    <td>
      <input
        type='checkbox'
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </td>
    <td>
      <button
        className='btn btn-danger'
        onClick={() => props.deleteTask(props.task)}
      >
        Eliminar
      </button>
    </td>
  </tr>
);
