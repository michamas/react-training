import { useMemo, useRef, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const inputRef = useRef();

  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, items]);

  function onSubmit(e) {
    e.preventDefault();
    const value = inputRef.current.value;

    if (value === "") return;
    setItems((prev) => {
      return [...prev, value];
    });
    inputRef.current.value = "";
  }

  // niepotrzebne
  // function onChange(e) {
  //   const value = e.target.value;

  //   setItems((prev) => {
  //     return prev.filter((item) =>
  //       item.toLowerCase().includes(value.toLowerCase())
  //     );
  //   });
  // }

  return (
    <>
      Search
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        // onChange={onChange}
        type="search"
      />
      <form onSubmit={onSubmit}>
        New Item: <input ref={inputRef} type="text" />
        <button>Add</button>
      </form>
      <h3>Items:</h3>
      {filteredItems.map((item) => (
        <div>{item}</div>
      ))}
    </>
  );
}
