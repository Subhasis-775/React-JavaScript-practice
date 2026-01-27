import React, { useState } from "react";
function TodoList(){
    const [input,setInput]=useState("");
    const [todos,setTodos]=useState([]);
    const handleAddTodo=()=>{
        if(input.trim()==="") return;
        const newTodo={
            id:Date.now(),
            text:input,
            completed:false
        };
        setTodos((prev)=>[...prev,newTodo]);
        setInput("");
    }
    const handleDeleteTodo=(id)=>{
        setTodos(todos.filter((todo)=>todo.id!==id));
    }
    const handleToggleTodo=(id)=>{
        setTodos(todos.map((todo)=>todo.id===id?{...todo,completed:!todo.completed}:todo));
    }
    return(
        <div >
            <h1>Todo List</h1>
            <input 
            type="text"
            value={input}
            onChange={(e)=>setInput(e.target.value)}
            />
            <button onClick={handleAddTodo}>Add</button>
            <ul>
                {todos.map((todo)=>(
                    <li key={todo.id}>
                        <input type="checkbox"
                        checked={todo.completed}
                        onChange={()=>handleToggleTodo(todo.id)}
                        />
                        <span style={{textDecoration:todo.completed?"line-through":"none"}}>{todo.text}</span>
                        <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default TodoList;