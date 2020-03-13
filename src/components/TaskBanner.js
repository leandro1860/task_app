import React from 'react'

export const TaskBanner = props => (
  <h4 className="bg-danger text-white text-center p-4">
    aplicacion de tareas ({this.props.taskItems.filter(t => !t.done).length}{' '}
    tareas a realizar)
  </h4>
)
