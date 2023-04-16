import { useState } from "react";
// import "./App.css";
// @ts-ignore
import TodoList from "TodoListApp/TodoList";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <h1>Host Application</h1>
        <div className="card">
          <TodoList />
        </div>
        <TodoList />
      </div>
    </>
  );
}

export default App;
