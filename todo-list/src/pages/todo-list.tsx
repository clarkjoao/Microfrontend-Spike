import { useState } from "react";

import Button from "../components/Button";
import Form from "../components/Form";
import Input from "../components/Input";
import List from "../components/List";

import "./todo-list.css";

function Todo() {
  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState<any[]>([]);

  function handleChangeInput(event: React.ChangeEvent<HTMLInputElement>) {
    const inputTask = event.target.value;

    setTask(inputTask);
  }

  function handleAddItemToList(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!task) {
      return;
    }

    setItemsList([...itemsList, task]);
    setTask("");
  }

  return (
    <div className="todo-wrapper">
      <h1>ToDo List</h1>
      <Form onSubmit={handleAddItemToList}>
        <Input
          type="text"
          placeholder="Adicione uma tarefa"
          onChange={handleChangeInput}
          value={task}
        />

        <Button type="submit">Adicionar</Button>
      </Form>

      <List itemsList={itemsList} />
    </div>
  );
}

export default Todo;
