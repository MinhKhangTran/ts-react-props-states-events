import React from "react";

const TodoListe: React.FC = () => {
  const [todo, setTodo] = React.useState("");
  const [listItem, setListItem] = React.useState<string[]>([]);

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const newItem = todo;
    // console.log(newItem);

    setListItem([...listItem, todo]);
    setTodo("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={todo} onChange={changeHandler} placeholder="todo" />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {listItem.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoListe;
