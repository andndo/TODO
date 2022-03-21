import "./App.css";
import React, { useState, useRef, useEffect } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 0,
      value: "asfd",
    },
  ]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  function handleRemove(index) {
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
    
    nextId.current += 1;
    setTodos((currentArray) => [...currentArray, data]);

    console.log(todos);
  };

  const handleReset = () => {
    setTodos(todos.filter((data) => data.id >= 100));
  };

  const nextId = useRef(1);

  return (
    <div class="main">
      <h1>Todo-List</h1>
      <h3>Built with AnDoHyeon</h3>
      <form onSubmit={onSubmit} id="form">
        <input
          type="Text"
          placeholder="쓰는곳"
          value={todo}
          onChange={onChange}
          class="input"
        />
        <button
          style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: 5,
            marginLeft: 4,
          }}
        >
          추가하기
        </button>
        <button onClick={handleReset} class="resetBtn">
          리셋
        </button>
        <hr
          style={{
            width: "100%",
            height: "1px",
            marginTop: "10px",
            backgroundColor: "black",
          }}
        />
        <div
          style={{ display: "flex", flexDirection: "column" }}
          class="contents"
        >
          {todos.map((item) => (
            <ul style={{ display: "inline-flex" }}>
              <li>{item.value}</li>
              <button
                onClick={(e) => handleRemove(item.id)}
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
