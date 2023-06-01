/** @format */

import "./App.css";
import { useState } from "react";

function App() {
  const item = useState(0)[1];
  const item2 = useState(0)[2];

  console.log(item, item2);
  return <div className="App"></div>;
}

export default App;
