import Item from './Item';

const List = ({ todos, editTodo, deleteTodo }) => {
    return (
        <div id='list-container'>
            {todos.map(todo => (
                <Item
                    key={todo.id}
                    todo={todo}
                    editTodo={editTodo}
                    deleteTodo={deleteTodo}
                />
            ))}
        </div>
    );
};

export default List;