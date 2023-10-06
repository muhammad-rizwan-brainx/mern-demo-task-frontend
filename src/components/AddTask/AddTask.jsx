import React from "react";
import { useState } from "react";
import { addTask } from "../../Store/Thunks/taskThunk";

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isCompleted: false,
  });

  const handleFormData = (e) => {
    if (e.target.getAttribute("name") == "title") {
      setFormData({
        ...formData,
        title: e.target.value,
      });
    }
    if (e.target.getAttribute("name") == "description") {
      setFormData({
        ...formData,
        description: e.target.value,
      });
    }
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    dispatch(addTask(formData)).then(() => {
      console.log(e.target.reset());
    });
    console.log("formdata", formData);
  };

  return (
    <div className="addtask-container">
      <form className="addtask-form">
        <h3 className="title">Add Task</h3>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input name="title" type="text" />
        </div>
        <div className="description">
          <label htmlFor="description"></label>
          <input name="description" type="text" />
        </div>
        <div className="submit">
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
