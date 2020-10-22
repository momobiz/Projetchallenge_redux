
import initialState from './state.js';
import {ADD_TODO, DELETE_TODO, UPDATE_TODO, FILTER_TODO } from './ActionsTypes.js'; 
import { bindActionCreators } from 'redux';

const TodoReducer=(state=initialState,action)=>{
    switch(action.type){
        
        case ADD_TODO: 
            return [...state,{type:ADD_TODO,...action.payload}]

        case DELETE_TODO:
            let newtodo=[...state]; 
            newtodo=newtodo.filter(el=>el.id!==action.id);
            return newtodo;

        case UPDATE_TODO: 
         let list=[...state];  
        let list1=list.map(el=>(el.id===action.payload.id)?{...el, title:action.payload.title}:el);
        return list1;


        case FILTER_TODO:
            let list2=[...state];
            let list3=list2.map(el=>(el.id===action.id && action.isDone)?{...el, title:'task is done'}:el);
        
       return list3;
       
    
      
        default:
            return state;
    }

}
export default TodoReducer; 