import React from 'react';

export const TaskBanner = props => (
  <h4 className='bg-primary text-white text-center p-4 titleBanner'>
    Aplicación de tareas ({props.taskItems.filter(t => !t.done).length} tarea/s
    a realizar)
  </h4>
);
