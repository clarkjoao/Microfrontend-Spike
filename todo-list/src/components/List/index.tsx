interface ListProps {
  itemsList: any[];
}

function List(props: ListProps) {
  return (
    <ul className="todo-list">
      {props.itemsList.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default List;
