import styled from "styled-components";

const TodoItem = (todos) => {
  return (
    <>
      <div></div>
      <div>{todos.text}</div>
      <DeleteBtn>X</DeleteBtn>
    </>
  );
};
export default TodoItem;
const DeleteBtn = styled.button``;
