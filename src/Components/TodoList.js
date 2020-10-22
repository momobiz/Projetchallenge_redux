import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux'; 


const TodoList = () => {
    let todos=useSelector((state)=>state); 
    return (
        <div>
            
            {todos.map((todo,index)=><TodoItem todo={todo} key={index}/>)}
        
            
        </div>
    );
}

export default TodoList;
