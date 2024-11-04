import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([]); //할일 목록을 저장하고 빈 배열로 초기화
  const [inputValue, setInputValue] = useState(""); //새 할일 목록 저장

  // 완료 상태 체크박스
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
      // id 가 일치할 경우 앞에 todo 값을 토글 시킴 아니면 그대로
    );
  };

  // 새 할일 추가 
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]); //todo 배열에 새 할 일 추가
      setInputValue(""); //인풋창 초기화
    }
  };

  // 할 일 삭제
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>투두리스트</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="잠은 죽어서 자기"
      />
      <button onClick={addTodo}>추가</button>
      {todos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span 
            style={{ textDecoration: todo.completed ? "line-through" : "none",
     
             }}>
            {todo.text}
          </span>
          <button onClick={() => deleteTodo(todo.id)}>삭제</button>
        </div>
      ))}
    </div>
  );
};

export default App;
