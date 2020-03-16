import React, { useState } from 'react'

export const TaskCreator = PropTypes => {
  const [newTaskName, setNewTaskName] = useState('')

  const updateNewTaskValue = e => setNewTaskName(e.target.value)

  const createNewTask = () => {
    PropTypes.callback(newTaskName)
    setNewTaskName('')
  }

  return (
    <div className="my-1">
      <input
        type="text"
        className="form-control"
        value={newTaskName}
        onChange={updateNewTaskValue}
        placeholder="Escribe aquí una nueva tarea"
      />
      <button className="btn btn-success mt-1" onClick={createNewTask}>
        Agregar tarea
      </button>
    </div>
  )
}
