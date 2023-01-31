import { useState } from "react"
import "./App.css"
import Form from "./components/Form"
import Lists from "./components/Lists"

const totalHrPerWeek = 24 * 7
function App() {
  const [tasks, setTasks] = useState([])
  const [idsToDelete, setIdsToDelete] = useState([])

  const totalHrs = tasks.reduce((acc, item) => acc + +item.hr, 0)

  const taskEntry = (taskObj) => {
    if (totalHrs + +taskObj.hr > totalHrPerWeek) {
      return alert("Total task hours exceeds the hrs available in a week!")
    }
    setTasks([...tasks, taskObj])
  }
  const taskSwitcher = (_id, type) => {
    const switched = tasks.map((item) => {
      if (_id === item._id) {
        item.type = type
      }
      return item
    })
    setTasks(switched)
  }

  const handleOnDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const filtered = tasks.filter((item) => item._id !== _id)
      setTasks(filtered)
    }
  }

  const handleCheck = (e) => {
    const { checked, value } = e.target
    if (checked) {
      setIdsToDelete([...idsToDelete, value])
    } else {
      const temp = idsToDelete.filter((item) => item !== value)
      setIdsToDelete(temp)
    }
  }

  const handleOnManyDelete = () => {
    if (window.confirm("Are you sure you want to delete the selected tasks?")) {
      const filtered = tasks.filter((item) => !idsToDelete.includes(item._id))
      setTasks(filtered)
      setIdsToDelete([])
    }
  }

  return (
    <div className="wrapper">
      <div className="container">
        {/* top-title */}
        <div className="row">
          <div className="col text-center mt-5">
            <h1>Not To Do List</h1>
          </div>
        </div>

        <Form taskEntry={taskEntry} />

        <Lists
          tasks={tasks}
          taskSwitcher={taskSwitcher}
          handleOnDelete={handleOnDelete}
          handleCheck={handleCheck}
        />

        {idsToDelete.length > 1 && (
          <div className="py-4">
            <button
              className="btn btn-lg btn-danger"
              onClick={handleOnManyDelete}
            >
              Delete Selected tasks
            </button>
          </div>
        )}

        {/* TOTAL HRS AREA */}
        <div className="row fw-bold">
          <div className="col">
            The total hours allocated is {totalHrs} Hour(s)
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
