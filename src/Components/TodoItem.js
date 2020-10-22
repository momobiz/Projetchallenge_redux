import React,{useState} from 'react';
import  {Card, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {deleteTodo, filterTodo, updateTodo} from '../redux/Actions.js';
import initialState from '../redux/state.js';

const TodoItem = ({todo}) => {

let dispatch=useDispatch();
const [editable, setEditable]=useState(false);
const [name,setName]=useState(todo.title);
const [isDone, setIsDone]=useState(false);


    

    const styleObject={
        width: '50rem',
        display:'flex',
        justifyContent:'space-between',
        border: '1px solid rgba(0,0,0,.125)',
        padding:'10px',
        marginLeft:'20%', 
        backgroundColor:'grey'


    }
    return (
       
            <div  style={styleObject}>
 
                {editable? <input type="text" value={name} 
                onChange={(event)=>setName(event.target.value)} className="form-control"/>: <h4 style={{ width:'150px'}}> Title : {todo.title} </h4>}
                
                 
                 
                 <select className="custom-select col-sm-2" onChange={(event)=>{setIsDone(event.target.value); dispatch(filterTodo(todo.id,!isDone))}}
                                                                            
                  id="inputGroupSelect01">
                   
                    <option value="false">isNotDone</option>
                    <option value="true">isDone </option>
               
                </select> 
                    
                <div style={{ display:'flex', width:'250px'}}>
                <Button variant="success" onClick={()=>{
                    
                    dispatch(updateTodo({
                        ...todo,
                        title:name
                    }));
                    setEditable(!editable);

                    if(editable) {setName(todo.title);}
                   
                
               
                }}>{editable?'ok':'edit'}</Button>
                <Button variant="warning" onClick={()=>dispatch(deleteTodo(todo.id))}>delete</Button>
                </div>
            </div>
        
    );
}

export default TodoItem;
