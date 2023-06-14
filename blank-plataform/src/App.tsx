import { useEffect, useState } from "react";
import "./App.css";
// @ts-ignore
import TodoList from "TodoListApp/TodoList";
function App() {
  const [path, setPath] = useState('');
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    console.log(window.location.pathname)
    if (window.location.pathname === '/app1') {
      setShow1(true)
    }
    if (window.location.pathname === '/app2') {
      setShow2(true)
    }

    setPath(window.location.pathname)
  }, [])

  return (
    <>
      <h1>Host Application</h1>
      {!path.length ? <div>
        <button onClick={() => setShow1(!show1)}>Show App 1: {show1.toString()}</button>
        <button onClick={() => setShow2(!show2)}>Show App 2: {show2.toString()}</button>
      </div> : null}
      <div className="App">
        {show1 || path === '/app1' ?
          <div className="card">
            <TodoList title="App 1"/>
          </div>
          : null}
        {show2 || path === '/app2' ?
          <div className="card">
            <TodoList title="App 2"/>
          </div>
          : null}
      </div>
    </>
  );
}

export default App;
