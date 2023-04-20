// import logo from './logo.svg';
//퍼블릭으로 이미지를 옮기면 경로로도 사용가능!
//두 가지 방법을 두루두루 사용하자!

import './App.css';
import {useState} from 'react'
import Title from './components/title'


function App() {
  // let name = "mario";
  // const [name, setName] = useState('mario');

  const [events, setEvents] = useState([
    {title: "mario's birthday bash", id: 1},
    {title: "bower's live stream", id:2},
    {title: "race on moo moo farm", id: 3},
  ])

  const [showEvent, setShowEvent] = useState(true);
  console.log(showEvent);

  const clickHandler = (id) =>{
    // name = "luigi";

    // setName('luigi');
    // setEvents(events.filter((event)=>{
    //   return id != event.id;
    // }))
    setEvents((prevEvents)=>{
      return prevEvents.filter((event)=>{
        return id != event.id;
      })
    })
    console.log("실행", id);

  }

  const subtitle = "All the latest events in MarioLand";
  return (
    <div className="App">
      <Title title="Event is Your Area" subtitle={subtitle} />
      <Title title="Another title" subtitle='another subtitle' />
      {showEvent && (
        <div>
        <button onClick={()=>setShowEvent(false)}>hide button</button>
      </div>
      )}
      {!showEvent && (
        <div>
        <button onClick={()=>setShowEvent(true)}>show button</button>
      </div>
      )

      }
            {/* <h1>My name is {name}</h1> */}
      {/* <button onClick={clickHandler}>change name</button> */}
      {
        showEvent && events.map((event, index)=>(
          <div key={event.id}>
              <h2>{"index : " + index}{", event.id : "+ event.id}{", event.title : " +event.title}</h2>
              {/* <button onClick={(clickHandler(event.id))}>onClick</button> 바로실행 되어버림, 클릭해도 실행안됨 */}
              <button onClick={()=>(clickHandler(event.id))}>Delete event</button>
          </div>
        ))
      }
    </div>
  );
}

export default App;
