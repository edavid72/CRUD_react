import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';

const Form = ({ createTask }) => {
  /*----- State01 of Tast List: Read content that the user types in the form and add to the state -----*/
  const [taskList, setTaskList] = useState({
    user: '',
    task: '',
    date: '',
    description: '',
  });

  /*----- State02 of Error Msg: Validate the form and change the state to false or true according to its execution and with those an error message can be generated in the DOM -----*/
  const [errorMsg, setErrorMsg] = useState(false);

  //function to read the data that the user adds.
  const handleChange = (e) => {
    setTaskList({
      ...taskList,
      [e.target.name]: e.target.value,
    });
  };

  //destructuring to State
  const { user, task, date, description } = taskList;
  /* End */

  const handleSubmit = (e) => {
    e.preventDefault();

    //!Validate Form
    if (
      user.trim() === '' ||
      task.trim() === '' ||
      date.trim() === '' ||
      description.trim() === ''
    ) {
      setErrorMsg(true);
      return;
    }
    //Remove error message
    setErrorMsg(false);

    //!Assign ID to task
    taskList.id = uuidv4();

    //!Create the Task
    createTask(taskList);

    //!Reset the Form
    setTaskList({
      user: '',
      task: '',
      date: '',
      description: '',
    });
  };

  return (
    <>
      <div className="flex column sec_01">
        <h2 className="sub_title">Create Task</h2>
        {errorMsg ? <p className="error_msg">All fields are required</p> : null}
        <form className="flex column form" onSubmit={handleSubmit}>
          <label>User</label>
          <input
            type="text"
            name="user"
            value={user}
            placeholder="User"
            className="input"
            onChange={handleChange}
          />

          <label>Task</label>
          <input
            type="text"
            name="task"
            value={task}
            placeholder="Task"
            className="input"
            onChange={handleChange}
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={date}
            className="input"
            onChange={handleChange}
          />

          <label>Task Description</label>
          <textarea
            name="description"
            value={description}
            rows="7"
            onChange={handleChange}
          ></textarea>

          <button type="submit" className="button">
            Add Task
          </button>
        </form>
      </div>
    </>
  );
};

Form.propTypes = {
  createTask: PropTypes.func.isRequired,
};

export default Form;
