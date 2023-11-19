import { useEffect, useState } from "react";
import { Timer } from "./components";

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const [numbers, setNumbers] = useState();

  // = component mount
  useEffect(() => {
    console.log("mounted");
    const fetchData = async () => {
      const num = await fetch(
        "https://www.random.org/integers/?num=100&min=1&max=100&col=5&base=10&format=plain&rnd=new"
      ).then((res) => res.text());

      setNumbers(num);
    };

    fetchData();

    return () => {
      console.log("unmounted");
    };
  }, []);

  // = component mount || update
  useEffect(() => {
    console.log("mounted or generally updated");
  });

  // = component update(лише тоді, коли значення масиву змінюються)
  useEffect(() => {
    console.log("updated due to COUNT");

    return () => {
      console.log("unmounted 2");
    };
  }, [count]);

  return (
    <>
      <button
        onClick={() => {
          setCount((prevValue) => ++prevValue);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setCount2((prevValue) => prevValue + 100);
        }}
      >
        {count2}
      </button>
      {Math.floor(Math.random() * 100) >= 50 && <Timer index={1} />}
      {Math.floor(Math.random() * 100) >= 50 && <Timer index={2} />}
      {Math.floor(Math.random() * 100) >= 50 && <Timer index={3} />}
      {Math.floor(Math.random() * 100) >= 50 && <Timer index={4} />}
    </>
  );
}

export default App;
