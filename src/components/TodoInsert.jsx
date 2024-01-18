<<<<<<< HEAD
import { useState } from "react";
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
      <input onChange={onChange} value={value}></input>
      <button onClick={addItem}>+</button>
    </>
  );
=======
const TodoInsert = () => {
  return <></>;
>>>>>>> main
};
export default TodoInsert;
