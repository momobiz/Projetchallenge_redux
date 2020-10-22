import {ADD_TODO, DELETE_TODO, UPDATE_TODO, FILTER_TODO} from './ActionsTypes.js'; 

export const addTodo=(payload)=>{
    return {
        type:ADD_TODO, 
        payload:payload

    }
}
export const deleteTodo=(TodoId)=>{
    return {
        type:DELETE_TODO, 
        id:TodoId
    

    }
}
export const updateTodo=(todo)=>{
    return {
        type:UPDATE_TODO, 
        payload:todo

    }
}
export const filterTodo=(todoId, isDone)=>{
    return {
        type:FILTER_TODO, 
        id:todoId, 
        isDone:isDone

    }
}