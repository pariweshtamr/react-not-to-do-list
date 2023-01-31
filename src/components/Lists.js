import React from "react"
import BadList from "./BadList"
import TaskList from "./TaskList"

const Lists = ({ tasks, taskSwitcher, handleCheck, handleOnDelete }) => {
  const entryList = tasks.filter((item) => item.type === "entry")
  const badList = tasks.filter((item) => item.type === "bad")
  return (
    <div className="row mt-5 g-2">
      <TaskList
        entryList={entryList}
        taskSwitcher={taskSwitcher}
        handleOnDelete={handleOnDelete}
        handleCheck={handleCheck}
      />
      <BadList
        badList={badList}
        taskSwitcher={taskSwitcher}
        handleOnDelete={handleOnDelete}
        handleCheck={handleCheck}
      />
    </div>
  )
}

export default Lists
