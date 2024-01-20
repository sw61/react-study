import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onToggle, onDelete }) => {
  console.log(todos);
  return (
    <>
      <ListBox>
        {todos.map((todo) => (
          <TodoItem
            todo={todo}
            id={todos.id}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </ListBox>
    </>
  );
};
export default TodoList;
const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
`;
