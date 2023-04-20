// import logo from './logo.svg';
//퍼블릭으로 이미지를 옮기면 경로로도 사용가능!
//두 가지 방법을 두루두루 사용하자!

import './App.css';
import {useState} from 'react'


function App() {
  // let name = "mario";
  const [name, setName] = useState('mario');

  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bower's live stream", id:4},
    {title: "race on moo moo farm", id: 3},
  ])

  const clickHandler = () =>{
    // name = "luigi";
    setName('luigi');
    console.log(name);
  }

  return (
    <div className="App">
      <h1>My name is {name}</h1>
      <button onClick={clickHandler}>change name</button>
      {
        events.map((event, index)=>(
          <div key={event.id}>
              <h2>{"index : " + index}{", event.id : "+ event.id}{", event.title : " +event.title}</h2>
          </div>
        ))
      }
    </div>
  );
}

export default App;
