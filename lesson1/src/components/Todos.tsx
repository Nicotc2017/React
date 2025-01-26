import { FunctionComponent } from "react";
import useFetch from "../hooks/useFetch";

interface TodosProps {}

const Todos: FunctionComponent<TodosProps> = () => {
  let [todos] = useFetch("https://jsonplaceholder.typicode.com/todos");
  return (
    <>
      <h1>Todos</h1>
      {todos.length ? (
        todos.map((todo : any) => <p key={todo.id}>{todo.title}</p>)
      ) : (
        <p>No Todos Found!</p>
      )}
    </>
  );
};

export default Todos;
 