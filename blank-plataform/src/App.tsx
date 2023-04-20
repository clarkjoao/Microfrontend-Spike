import "./App.css";
// @ts-ignore
import TodoList from "TodoListApp/TodoList";
// @ts-ignore
// @ts-ignore
import { StoreProvider, useStore } from "TodoListApp/TodoStore";
import { useEffect } from "react";
function App() {
  const {Store} = useStore()

  useEffect(()=>{
    console.log(Store)
  },[Store])
  
  return (
    <div className="App">
        <h1>Host Application</h1>
        <div className="card">
          <h2 style={{
            color: "red"
          }}>TODO 1</h2>
            <TodoList />
          </div>
          <div className="card">
        <h2 style={{
          color: "hotpink"
        }}>TODO 2</h2>
        <TodoList />
        </div>
      </div>
  );
}

export default ()=> (<StoreProvider><App/></StoreProvider>);
