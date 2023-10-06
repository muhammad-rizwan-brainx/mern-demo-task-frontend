import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask } from "../../Store/Thunks/taskThunk";

const Tasks = () => {
  const dispatch = useDispatch();
  var tasks = useSelector((state) => state.task.tasks);
  const handleDelete = (id) => {
    {
      dispatch(deleteTask({ id: id }))
        .unwrap()
        .then(() => {
          tasks = tasks.filter((task) => task._id !== id);
        });
    }
  };

  useEffect(() => {}, [tasks]);

  return (
    <>
      <h3>All Tasks</h3>
      <table className="all-tasks">
        <thead>
          <tr>
            <th className="a-serial">Sr. No</th>
            <th className="a-title">Title</th>
            <th className="a-description">Description</th>
            <th className="a-status">Status</th>
            <th className="action-class">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr key={task?._id}>
              <td>{index + 1}</td>
              <td>{task?.title}</td>
              <td>{task?.description}</td>
              <td>{task?.isCompleted == true ? "completed" : "Pending"}</td>
              <td>
                <button onClick={() => handleDelete(task._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
