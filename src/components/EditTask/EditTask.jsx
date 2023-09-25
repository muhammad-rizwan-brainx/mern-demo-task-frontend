import React from 'react'
import './EditTask.css'

const EditTask = () => {
  return (
    <div className='edittask-container'>
        <form className='edittask-form' action="">
            <h3 className='title'>Edit Task</h3>
            <div className="title">
                <label htmlFor="title">Title</label>
                <input name='title' type="text" />
            </div>
            <div className="description">
                <label htmlFor="description">Description</label>
                <input name='description' type="text" />
            </div>
            <div className="iscompleted">
                <label htmlFor="isCompleted">IsCompleted</label>
            <input type="radio" name="completed" value="true"/> Yes
            <input type="radio" name="completed" value="false" /> No
            </div>
            <div className="submit">
                <button type='submit'>Edit</button>
            </div>
        </form>
    </div>
  )
}

export default EditTask