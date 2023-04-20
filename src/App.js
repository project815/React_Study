// import logo from './logo.svg';
//퍼블릭으로 이미지를 옮기면 경로로도 사용가능!
//두 가지 방법을 두루두루 사용하자!

import './App.css';
import React, {useState} from 'react'
import Title from './components/title'
import Modal from './components/Modal'

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

  const subtitle = "All the latest Event in MarioLand";
  return (
    <div className="App">
      <Title title="Event is Your Area" subtitle={subtitle} />
      <br/>
      <Title title="Another title" subtitle='another subtitle' />
      {/* <Modal>
        <h2>10% 0ff Coupon Code!!</h2>
        <p>Use the code INAK10 at the checkout!</p>
      </Modal> */}
      <Modal>
        <h2>Term and Conditions</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <a href='https://www.naver.com'>find more out...</a>
      </Modal>
      
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
          <React.Fragment key={event.id}>
              <h2>{"index : " + index}{", event.id : "+ event.id}{", event.title : " +event.title}</h2>
              {/* <button onClick={(clickHandler(event.id))}>onClick</button> 바로실행 되어버림, 클릭해도 실행안됨 */}
              <button onClick={()=>(clickHandler(event.id))}>Delete event</button>
          </React.Fragment>
        ))
      }
    </div>
  );
}

export default App;
