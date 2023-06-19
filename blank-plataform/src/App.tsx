import { useEffect, useState } from "react";
import "./App.css";
// @ts-ignore
import TodoList from "TodoListApp/TodoList";
function App() {
  const [showOpt, setShowOpt] = useState<boolean>(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/app1') {
      setShow1(true)
    }
    if (window.location.pathname === '/app2') {
      setShow2(true)
    }

    if (window.location.pathname === '/') {
      setShowOpt(true)
    }

  }, [window.location.pathname])

  return (
    <>
      <header>
        <h1>Blank Plataform: {window.location.pathname}</h1>
        {!showOpt ? <a href="/">Back to Home</a> : null}
      </header>

      {showOpt ?
        (<>
          <button onClick={() => setShow1(!show1)}>Show App 1: {show1.toString()}</button>
          <button onClick={() => setShow2(!show2)}>Show App 2: {show2.toString()}</button>

        </>)
        : null
      }
      <div className="App">
        {show1 ?
          <div className="card">
            <TodoList title="App 1" />
          </div>
          : null}
        {show2 ?
          <div className="card">
            <TodoList title="App 2" />
          </div>
          : null}
      </div>
    </>
  );
}

export default App;
