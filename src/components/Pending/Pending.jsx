import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../Store/Thunks/taskThunk";
import { completeTask } from "../../Store/Thunks/taskThunk";
import "./Pending.css";

const Pending = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const gatTasks = () => {
    dispatch(getTasks());
  };

  useEffect(() => {
    gatTasks();
  }, []);

  return (
    <>
      <h3>Pending</h3>
      <table className="p-table">
        <thead>
          <tr>
            <th className="p-serial">Sr. No</th>
            <th className="p-title">Title</th>
            <th className="p-description">Description</th>
            <th className="Edit">Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks
            ?.filter((task) => task?.isCompleted === false)
            .map((task, index) => (
              <tr key={task?._id}>
                <td>{index + 1}</td>
                <td>{task?.title}</td>
                <td>{task?.description}</td>
                <td>
                  <button>
                    <Link className="edit-task" to="/edittask">
                      Edit
                    </Link>
                  </button>
                  <button
                    onClick={() => {
                      dispatch(completeTask({ id: task._id }));
                    }}
                  >
                    Complete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Pending;
