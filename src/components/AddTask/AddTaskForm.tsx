import { ChangeEvent, FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { AddTaskFormProps } from '../../interfaces/todolist-interfaces';
import './AddTaskForm.css'

function AddTaskForm({ addTask }: AddTaskFormProps): JSX.Element {
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <Form.Control 
          placeholder="Add new task" 
          value={newTask}
          onChange={handleInputChange}
        />
        <div className="input-group-append">
          <Button variant="primary" type="submit" className='addtask-button'>
            +
          </Button>
        </div>
      </div>
    </form>
  );
}

export default AddTaskForm