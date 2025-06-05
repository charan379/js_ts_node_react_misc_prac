import { useCallback, useState } from "react";
import "./App.css";
import List from "./List";

function App() {
  const [number, setNumber] = useState(0);

  const [count, setCount] = useState(0);

  const getList = useCallback(() => {
    return [number, number + 1, number + 2, number + 3];
  }, [number]);

  return (
    <>
      {/*  */}
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      ></input>
      {/*  */}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count : {count}
      </button>
      {/*  */}
      <List getList={getList} />
    </>
  );
}

export default App;
