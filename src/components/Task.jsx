import React from 'react';

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

      <button className="button_delete" onClick={()=>handletaskDelete(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
