import logo from "./logo.svg";
import "./App.css";
import Parent from "./component/Parent";
import Child from "./component/Child";
import Helloworld from "./component/HelloWorld";
// import { useEffect, useState } from "react";

function App() {
  console.log("为什么要执行两遍");
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <img alt="1" src={logo} />
      Learn React start this step
      <Parent message="this is parent component" />
      <Helloworld />
      <Child onUpdate={(data) => console.log(11, data)} />
    </div>
  );
}

export default App;
