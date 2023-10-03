import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getTasks} from "../../Store/Thunks/taskThunk"

const Tasks = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.task.tasks);

  const getp = () => {
    dispatch(getTasks());
  };
  useEffect(() => {
    getp();
  }, []);
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
          </tr>
        </thead>
        <tbody>
          {tasks?.map((task, index) => (
            <tr key={task?._id}>
              <td>{index+1}</td>
              <td>{task?.title}</td>
              <td>{task?.description}</td>
              <td>{task?.isCompleted == true ? "completed" : "Pending"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
