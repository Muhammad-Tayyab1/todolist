import React, { useState } from 'react'
import { Todo } from './Todo';
import { TodoForm } from './TodoForm';

export const TodoList = () => {
    const [todos, setTodos]= useState([]);
const addTodo= todo=> {
    if (!todo.text || /^\s*$/.test(todo.text)) {
        return;
    }
    const newTodo=[todo, ...todos];
    setTodos(newTodo);
    console.log(...todos)
}
const updateTodo=(todoId, newValue)=>{
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
        return;
    }
    setTodos(prev => prev.map(item=> (item.id === todoId ? newValue : item)))
}
const removeTodo=id=>{
const removeaArr =[...todos].filter(todo =>todo.id !==id)
setTodos(removeaArr)
}
const completeTodo =id=> {
    let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
            todo.isComplete= !todo.isComplete;
        }
        return todo;
    })
    setTodos(updatedTodos)
}
    return (
        <div className="App">
            <h1 className="heading">Todo App</h1>
            <TodoForm onSubmit={addTodo} />
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
        </div>
    )
}
