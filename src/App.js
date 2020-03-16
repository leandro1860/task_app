import React, { useState, useEffect } from 'react'
import { TaskBanner } from './components/TaskBanner'
import { TaskRow } from './components/TaskRow'
import { TaskCreator } from './components/TaskCreator'
import { VisibilityControl } from './components/VisibilityControl'

function App() {
  const [taskItems, setTaskItems] = useState([
    { name: 'Tarea 1', done: false },
    { name: 'Tarea 2', done: false },
    { name: 'Tarea 3', done: true },
    { name: 'Tarea 4', done: false }
  ])

  const [showCompleted, setshowCompleted] = useState(true)

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    if (data != null) {
      setTaskItems(JSON.parse(data))
    } else {
      setTaskItems([
        { name: 'Tarea 1', done: false },
        { name: 'Tarea 2', done: false },
        { name: 'Tarea 3', done: true },
        { name: 'Tarea 4', done: false }
      ])
      setshowCompleted(true)
    }
  }, [])

  const createNewTask = taskName => {
    if (!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, { name: taskName, done: false }])
    }
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])

  const toggleTask = task =>
    setTaskItems(
      taskItems.map(t => (t.name === task.name ? { ...t, done: !t.done } : t))
    )

  const taskTableRows = doneValue =>
    taskItems
      .filter(task => task.done === doneValue)
      .map(task => (
        <TaskRow
          key={task.name}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ))

  const deleteTask = task => {
    let removeIndex = taskItems
      .map(function(task) {
        return task.name
      })
      .indexOf(task.name)

    let filteredItems = taskItems
      .slice(0, removeIndex)
      .concat(taskItems.slice(removeIndex + 1, taskItems.length))
    setTaskItems(filteredItems)
  }
  return (
    <div>
      <TaskBanner taskItems={taskItems} />
      <div className="container-fluid">
        <TaskCreator callback={createNewTask} />
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Descripcion</th>
              <th>Realizada</th>
            </tr>
          </thead>
          <tbody>{taskTableRows(false)}</tbody>
        </table>
        <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl
            description="tareas realizadas"
            isChecked={showCompleted}
            callback={checked => setshowCompleted(checked)}
          />
        </div>
        {showCompleted && (
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Descripcion</th>
                <th>Realizada</th>
              </tr>
            </thead>
            <tbody>{taskTableRows(true)}</tbody>
          </table>
        )}
      </div>
    </div>
  )
}

export default App
