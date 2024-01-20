import styled from "styled-components";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdDeleteForever,
} from "react-icons/md";

const TodoItem = ({ todo, onToggle, onDelete }) => {
  const { id, text, checked } = todo;
  return (
    <ItemContainer>
      <div onClick={() => onToggle(id)}>
        {checked ? (
          <MdCheckBox className="check" />
        ) : (
          <MdCheckBoxOutlineBlank className="notCheck" />
        )}
      </div>
      <TextBox>{text}</TextBox>
      <MdDeleteForever
        onClick={() => onDelete(id)}
        className="deleteBtn"
      ></MdDeleteForever>
    </ItemContainer>
  );
};
export default TodoItem;
const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 450px;
  height: 35px;
  gap: 40px;
  padding: 10px 0px;
  border-bottom: solid 1px #e1e1e1;
  .check {
    font-size: 35px;
  }
  .notCheck {
    font-size: 35px;
  }
  .deleteBtn {
    font-size: 35px;
  }
`;

const TextBox = styled.div`
  font-size: 20px;
`;
