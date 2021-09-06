import React, { useEffect, useState } from 'react';
import './styles/resets.css';
import './styles/grid.css';
import Form from './components/Form';
import Task from './components/Task';

const Crud = () => {
  //Todo: Add Tasks to LocalStorage
  let initialTasks = JSON.parse(localStorage.getItem('tasksArray'));
  if (!initialTasks) {
    initialTasks = [];
  }

  //Todo: UseState-->//
  const [tasksArray, setTasksArray] = useState(initialTasks);

  //Todo: UseEffect-->//
  useEffect(() => {
    if (initialTasks) {
      localStorage.setItem('tasksArray', JSON.stringify(tasksArray));
    } else localStorage.setItem('tasksArray', JSON.stringify([]));
  }, [tasksArray, initialTasks]);

  //*Conditional Message
  const subTitle = tasksArray.length === 0 ? 'Create a Task' : 'Manage Tasks';

  //?Function: to take current tasks and add new tasks
  const createTask = (task) => {
    /* console.log('Esta es la nueva cita', task); */
    setTasksArray([...tasksArray, task]);
  };

  //!Function to delete a task according to its ID
  const handletaskDelete = (id) => {
    const newTasks = tasksArray.filter((task) => task.id !== id);
    setTasksArray(newTasks);
  };

  return (
    <>
      <h1 className="title">
        CRUD List <i className="fas fa-clipboard-list"></i>
      </h1>

      <div className="container">
        <div className="row flex">
          <div className="col-6 flex">
            <Form createTask={createTask} />
          </div>

          <div className="col-6 flex column m-auto">
            <h2 className="sub_title">{subTitle}</h2>
            {tasksArray.map((task) => {
              return (
                <Task
                  key={task.id}
                  task={task}
                  handletaskDelete={handletaskDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Crud;
