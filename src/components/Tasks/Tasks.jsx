import React, { useEffect } from "react";
const Tasks = () => {
  return (
    <>
      <h3>Completed</h3>
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
          <tr>
            <td>Data 1A</td>
            <td>Data 1B</td>
            <td>Data 1C</td>
            <td>Data 1D</td>
          </tr>
          <tr>
            <td>Data 2A</td>
            <td>Data 2B</td>
            <td>Data 2C</td>
            <td>Data 2D</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Tasks;
