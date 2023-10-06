import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks } from "../../Store/Thunks/taskThunk";
import "./Completed.css";

const Completed = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const getTask = () => {
    dispatch(getTasks());
  };
  useEffect(() => {
    getTask();
  }, []);
  
  return (
    <>
      <h3>Completed</h3>
      <table className="completed">
        <thead>
          <tr>
            <th className="col-1">Sr. No</th>
            <th className="col-2">Title</th>
            <th className="col-3">Description</th>
            <th className="col-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks
            ?.filter((task) => task?.isCompleted === true)
            .map((task, index) => (
              <tr key={task?._id}>
                <td>{index + 1}</td>
                <td>{task?.title}</td>
                <td>{task?.description}</td>
                <td>Completed</td>
                <td>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Completed;
