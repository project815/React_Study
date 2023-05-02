/** @format */

import React, { useReducer, useState } from "react";
const reducer = (state, action) => {};

const initialState = {
  count: 0,
  student: [
    {
      id: Date.now(),
      name: "James",
      isHere: false,
    },
  ],
};
export default function App2() {
  const [name, setName] = useState("");
  const [studentInfo, dispatch] = useReducer(reducer);

  return (
    <div>
      <h1>출석부</h1>
      <p>총 학생 수 : ?</p>
      <input type="text" placeholder="이름을 입력하세요 "></input>
    </div>
  );
}
