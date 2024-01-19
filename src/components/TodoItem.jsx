import styled from "styled-components";
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
    </>
  );
};
export default TodoItem;
const TextBox = styled.div``;
const DeleteBtn = styled.button``;
