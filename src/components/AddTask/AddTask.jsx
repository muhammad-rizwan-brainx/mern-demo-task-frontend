import React from 'react'

const AddTask = () => {
  return (
    <div className='addtask-container'>
      <form className='addtask-form'>
        <h3 className='title'>Add Task</h3>
        <div className="title">
          <label htmlFor="title">Title</label>
          <input name='title' type="text" />
        </div>
        <div className="description">
          <label htmlFor="description"></label>
          <input name='description' type="text" />
        </div>
        <div className="submit">
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  )
}

export default AddTask;