import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return <h1 className="text-3xl text-orange-400 justify-between text-center">Using time of sites:-- {count} times</h1>;
}
export default Timer