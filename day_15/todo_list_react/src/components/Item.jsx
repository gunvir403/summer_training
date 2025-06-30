import { useState } from "react";

const Item = ({ todo, editTodo, deleteTodo }) => {
    
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);
    
    const handleEditClick = () => {
        if (isEditing) {
            editTodo(todo.id, newTask);
        }
        setIsEditing(!isEditing);
    };
    
    const handleDeleteClick = () => {
        deleteTodo(todo.id);
    };
    
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    return (
        <div class="list-item">
            {isEditing ? (
                <input
                    type="text"
                    value={newTask}
                    onChange={handleInputChange}
                />
            ) : (
                <span>{todo.task}</span>
            )}
            <button onClick={handleEditClick}>{isEditing ? (<i class="fa-solid fa-floppy-disk"></i>) : (<i class="fa-solid fa-pen-to-square"></i>)}</button>
            <button onClick={handleDeleteClick}><i class="fa-solid fa-trash"></i></button>
        </div>
    );
};

export default Item;