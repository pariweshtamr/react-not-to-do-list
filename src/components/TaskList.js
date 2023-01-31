import React from "react"

const TaskList = ({ entryList, taskSwitcher, handleOnDelete, handleCheck }) => {
  return (
    <div className="col-md">
      <h2 className="text-center">Entry List</h2>
      <hr />
      <table className="table table-striped table-hover">
        <tbody id="task-list">
          {entryList.map((item, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleCheck}
                  value={item._id}
                />
              </td>
              <td className="text-center">{item.task}</td>
              <td className="text-end">{item.hr} hours</td>
              <td className="d-flex gap-2 justify-content-end">
                <button
                  className="btn btn-danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <button
                  className="btn btn-success"
                  onClick={() => taskSwitcher(item._id, "bad")}
                >
                  <i className="fa-solid fa-right-long"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TaskList
