import { useState, useRef } from "react";

import styled from "styled-components";
import TodoInsert from "./TodoInsert";
import TodoList from "./TodoList";
import TodoItem from "./TodoItem";
const TodoTemplate = () => {
  const nextId = useRef(3);
  const [todos, setTodos] = useState([
    { id: 0, text: "리액트 기초 알아보기", checked: false },
    {
      id: 1,
      text: "컴포넌트 스타일링 하기",
      checked: false,
    },
    { id: 2, text: "투두 리스트 하기", checked: false },
  ]);

  const onInsert = (text) => {
    const todo = [
      {
        id: nextId.current,
        text,
        checked: false,
      },
    ];
    setTodos(todos.concat(todo));
    nextId.current++;
  };
  const onToggle = (id) => {
    const newArray = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(newArray);
    // id가 같으면 ? check를 반대로 : 그대로 출력
  };
  const onDelete = (id) => {
    const DeleteItem = todos.filter((todos) => todos.id !== id);
    setTodos(DeleteItem);
  };
  return (
    <>
      <TodoContainer>
        <TodoHeader>일 정 관 리</TodoHeader>
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onToggle={onToggle} onDelete={onDelete} />
      </TodoContainer>
    </>
  );
};
export default TodoTemplate;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: solid 1px #e1e1e1;
  border-radius: 5px;
  width: 500px;
  margin: 0 auto;
`;
const TodoHeader = styled.div`
  background-color: #86b6f6;
  font-size: 22px;
  border-radius: 5px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 1. 할 일 입력받은 후 추가버튼 클릭시 목록에 추가.
// 2. 삭제 버튼 클릭시 해당 할 일 삭제.
// 3. 체크박스 클릭시 할 일 완료/미완료 스타일 적용하기. (예제 그림처럼 가운데에 줄 긋고, 체크박스 표시)
// [주요 개념]
// 1. useState로 객체 형태의 상태값 관리하기.
// 2. useState를 선언한 컴포넌트에서 함수를 만들어서 자식 컴포넌트에게 props로 전달하기.
// 3. Array 메서드인 filter, map 함수 사용하기.
