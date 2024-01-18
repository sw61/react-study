import styled from "styled-components";
<<<<<<< HEAD
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const TodoItem = (todo, onToggle, onDelete) => {
  const { id, text, checked } = todo;
  return (
    <>
      <div onClick={onToggle}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </div>
      <TextBox>{text}</TextBox>
      <DeleteBtn onClick={onDelete}>삭제</DeleteBtn>
=======

const TodoItem = (todos) => {
  return (
    <>
      <div></div>
      <div>{todos.text}</div>
      <DeleteBtn>X</DeleteBtn>
>>>>>>> main
    </>
  );
};
export default TodoItem;
<<<<<<< HEAD
const TextBox = styled.div``;
=======
>>>>>>> main
const DeleteBtn = styled.button``;
