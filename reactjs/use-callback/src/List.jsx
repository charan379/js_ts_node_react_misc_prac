import { useEffect, useState } from "react";

export default function List({ getList }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log("List Rerender");
    setList(getList());
  }, [getList]);

  return (
    <>
      {list.map((num, i) => {
        return <p key={i}>{num}</p>;
      })}
    </>
  );
}
