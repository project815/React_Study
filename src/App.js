// import logo from './logo.svg';
//퍼블릭으로 이미지를 옮기면 경로로도 사용가능!
//두 가지 방법을 두루두루 사용하자!

import './App.css';
import {useState} from 'react'


function App() {
  // let name = "mario";
  const [name, setName] = useState('mario');

  const clickHandler = () =>{
    // name = "luigi";
    setName('luigi');
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={clickHandler}>change name</button>
    </div>
  );
}

export default App;
