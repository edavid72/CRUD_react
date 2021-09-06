import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, handletaskDelete }) => {
  return (
    <div className="tasks m-auto">
      <p className="task">
        Task:<span>{task.task}</span>
      </p>

      <p className="task">
        User:<span>{task.user}</span>
      </p>

      <p className="task">
        Date:<span>{task.date}</span>
      </p>

      <p className="task">
        Description:<span>{task.description}</span>
      </p>

      <button
        className="button_delete"
        onClick={() => handletaskDelete(task.id)}
      >
        Delete
      </button>
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.object.isRequired,
  handletaskDelete: PropTypes.func.isRequired,
};

export default Task;
