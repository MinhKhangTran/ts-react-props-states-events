import React from "react";

const users = [
  {
    name: "francis",
    age: 21
  },
  { name: "mike", age: 25 },
  { name: "nils", age: 27 },
  { name: "peter", age: 19 }
];

const UserSearch: React.FC = () => {
  const [value, setValue] = React.useState("");
  const [suche, setSuche] = React.useState<
    { name: string; age: number } | undefined
  >();
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = users.find((user) => user.name === value);
    // console.log(found);
    if (!found) {
      return setSuche({ name: "keine person gefunden", age: 0 });
    }
    return setSuche(found);
  };

  // Ref
  React.useEffect(() => {
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          ref={inputRef}
          placeholder="Suche..."
        />
        <button type="submit">Suche</button>
      </form>
      <h1>{suche?.name}</h1>
      <h1>{suche?.age}</h1>
    </>
  );
};

export default UserSearch;
