import { useState } from "react";

function App(props) {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Eat", completed: true },
    { id: 1, name: "Sleep", completed: false },
    { id: 2, name: "Repeat", completed: false },
  ]);

  const [newTaskName, setNewTaskName] = useState("");

  // Add a new task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskName.trim()) return;

    const newTask = {
      id: tasks.length,
      name: newTaskName,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskName("");
  };

  // Toggle task completion
  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="rodoapp stack-large">
      <h1>Todo App</h1>

      <form action="">
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            What needs to be done?
          </label>
        </h2>

        <input 
          type="text" 
          id="new-todo-input" 
          className="input input__lg"
          name="text"
          autoComplete="off"
        />

        <button className="btn btn__primary btn__lg">
          Add
        </button>
      </form>

      <div className=" filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Show </span>
          <span>All</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>        
      </div>

      <h2 id="list-heading">3 tasks remaining</h2>
      <ul 
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <li className="todo stack-small">
          <div className="c-cb">
            <input type="checkbox" id="todo-0" defaultChecked />
            <label htmlFor="todo-0" className="todo-label">
              Eat
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="vissually-hidden">Eat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="vissually-hidden">Eat</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input type="checkbox" id="todo-1" />
            <label htmlFor="todo-1" className="todo-label">sleep</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Sleep</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Sleep</span>
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input type="checkbox" id="todo-2" />
            <label htmlFor="todo-2" className="todo-label">Repeat</label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit <span className="visually-hidden">Repeat</span>
            </button>
            <button type="button" className="btn btn__danger">
              Delete <span className="visually-hidden">Repeat</span>
            </button>
          </div>
        </li>
      </ul>      
    </div>
  );
}

export default App;
