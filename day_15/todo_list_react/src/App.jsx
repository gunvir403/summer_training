import { useState, useEffect } from "react";
import Add from './components/Add';
import List from './components/List';

const App = () => {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos'));
        if (savedTodos) {
            setTodos(savedTodos);
        }
    }, []);

    useEffect(() => {
        if(todos.length > 0) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }
    }, [todos]);
    
    const add = (task) => {
        const newToDo = {
            id: todos.length,
            task,
        };
        setTodos([...todos, newToDo]);
    };

    const editTodo = (id, updatedTask) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, task: updatedTask } : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div id="container">
            <Add add={add} />
            <List todos={todos} editTodo={editTodo} deleteTodo = {deleteTodo} />
        </div>
    )
};

export default App;