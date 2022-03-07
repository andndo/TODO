import "./App.css";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(
    () =>
      JSON.parse(window.localStorage.getItem("todos")) || {
        id: 0,
        value: "",
      }
  );
  const onChange = (event) => {
    setTodo(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function handleRemove(e, index) {
    console.log(index);
    console.log(todos);
    const data = todos.filter((data) => data.id !== index);
    setTodos(data);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo === "") {
      return;
    }

    setTodo("");
    const data = {
      id: nextId.current,
      value: todo,
    };

    setTodos((currentArray) => [...currentArray, data]);
    nextId.current += 1;

    console.log(todos);
  };

  const handleReset = () => {
    setTodos(todos.filter((data) => data.id >= 100));
  };

  const nextId = useRef(0);

  return (
    <div>
      <h1>Todo-List</h1>
      <form onSubmit={onSubmit}>
        <input
          type="Text"
          placeholder="쓰는곳"
          value={todo}
          onChange={onChange}
        />
        <button>추가하기</button>
        <button onClick={handleReset}>리셋</button>
        <hr />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {todos.map((item, index) => (
            <ul style={{ display: "inline-flex" }}>
              <li key={index}>{item.value}</li>
              <button
                onClick={(e) => handleRemove(e, index)}
                style={{
                  border: 0,
                  outline: "none",
                  cursor: "pointer",
                  backgroundColor: "RED",
                  color: "white",
                  borderRadius: 8,
                }}
              >
                삭제
              </button>
            </ul>
          ))}
        </div>
      </form>
    </div>
  );
}

export default App;
