import { useState } from "react";

import styled from "styled-components";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const addItem = () => {
    onInsert(value);
    setValue("");
  };
  return (
    <>
      <InsertContainer>
        <InsertBox
          onChange={onChange}
          value={value}
          placeholder="할 일"
        ></InsertBox>
        <AddBtn onClick={addItem}>+</AddBtn>
      </InsertContainer>
    </>
  );
};
export default TodoInsert;
const InsertContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const InsertBox = styled.input`
  border: 1px solid #e1e1e1;
  width: 460px;
  height: 40px;
`;
const AddBtn = styled.button`
  width: 40px;
  background-color: #b4d4ff;
  border-style: none;
`;
