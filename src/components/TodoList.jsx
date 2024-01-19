import TodoItem from "./TodoItem";

const TodoList = (todos, onToggle, onDelete) => {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            id={todos.id}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ul>
    </>
  );
};
export default TodoList;
