import React from "react"

const BadList = ({ badList, taskSwitcher, handleOnDelete, handleCheck }) => {
  const ttlHrs = badList.reduce((acc, item) => acc + +item.hr, 0)
  return (
    <div className="col-md">
      <h2 className="text-center">Bad List</h2>
      <hr />
      <table className="table table-striped table-hover">
        <tbody id="bad-task">
          {badList.map((item, i) => (
            <tr key={i}>
              <td>
                <input
                  type="checkbox"
                  className="form-check-input"
                  value={item._id}
                  onChange={handleCheck}
                />
              </td>
              <td className="text-center">{item.task}</td>
              <td className="text-end">{item.hr} hour(s)</td>
              <td className="d-flex gap-2 justify-content-end">
                <button
                  className="btn btn-warning"
                  onClick={() => taskSwitcher(item._id, "entry")}
                >
                  <i className="fa-solid fa-left-long"></i>
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => handleOnDelete(item._id)}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {badList.length ? (
        <div className="text-end fw-bold">You can save upto {ttlHrs} hr(s)</div>
      ) : (
        <div className="text-end fw-bold">
          Well done! You are using your time wisely...
        </div>
      )}
    </div>
  )
}

export default BadList
