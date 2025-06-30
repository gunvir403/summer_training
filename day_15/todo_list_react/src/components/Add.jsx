import { useState } from "react";

const Add = ({ add }) => {
    const [task, setTask] = useState('');
    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleSumbit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            add(task);
            setTask('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSumbit} id="input-container">
                <input 
                    type="text"
                    value={task}
                    onChange={handleInputChange}
                    placeholder="Enter todo..."
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
};

export default Add;