import React from 'react';
import {Button} from 'react-bootstrap';
import './todoInput.css';
import {useState} from 'react';
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/Actions.js';



const TodoInput = () => {
    const [newTask,setNewTask]=useState(''); 
    let dispatch=useDispatch();
    
    return (
        <div className="row addTask">
            < input style={{marginLeft:'250px'}} type='text' 
            placeholder="Add new Task" value={newTask} onChange={(event)=>setNewTask(event.target.value)}/>
            <Button variant="warning" onClick={()=>{
                dispatch(addTodo({
                    id:Math.random(),
                    title:newTask,
                    isDone:false
                })); setNewTask('');
            }}
            >Add</Button>
            
        </div>
    );
}

export default TodoInput;
