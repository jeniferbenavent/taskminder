import { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { Task } from '../../interfaces/todolist-interfaces';
import AddTaskForm from '../AddTask/AddTaskForm';
import './ToDoList.css'

function ToDoList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);
  
  const addTask = (taskText: string) => {
    const newTask = {
      text: taskText,
      isChecked: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleCheckboxChange = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].isChecked = !updatedTasks[index].isChecked;
     // Desactivar el modo de edición al marcar una tarea como completada
    setEditIndex(null);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>, index: number) => {

    const updatedTasks = [...tasks];
    updatedTasks[index].text = e.target.value;
    setTasks(updatedTasks);
  }

  const editButton = (index: number) => {
    setEditIndex(index);
  };

  const checkButton = () => {
    setEditIndex(null);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const deleteButton = (index: number) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  return (
    
    <div className='todolist'>
      <div className='d-flex todolist-titlesection'>
        <h1 className='todolist-time'>Today</h1>
        <p className='todolist-ntasks'>5</p>
      </div>
      <AddTaskForm addTask={addTask} />
      {tasks.map((task, index) => (
        <div key={index} className='todolist-tasks'>
          <div className='tasks'>
            <Form.Check
              type="checkbox"
              id={`checkbox-${index}`}
              checked={task.isChecked}
              onChange={() => handleCheckboxChange(index)}
              className='tasks-checkbox'
            />
            {editIndex === index ? (
              <div>
                <input
                  type="text"
                  value={task.text}
                  onChange={(e) => handleInputChange(e, index)}
                />
                <button
                  onClick={() => checkButton()}
                >
                  <img src='/src/assets/icons/cheque.png' width='15px' height='15px' />
                </button>
              </div>
            ) : (
              <span className={task.isChecked ? 'stroke' : 'none-stroke'}>
                {task.text}
              </span>
            )}
          </div>
          
          <div className='card-todolist-tasks-editdelete'>
            <button onClick={() => editButton(index)}>
              <img src='/src/assets/icons/pencil.png' width='15px' height='15px' />
            </button>
            <button onClick={() => deleteButton(index)}>
              <img src='/src/assets/icons/cross-small.png' width='18px' height='18px' />
            </button>
          </div>
          <hr></hr>
        </div>
      ))}
    </div>
  );
}

export default ToDoList