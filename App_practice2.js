import './App.css';
import TripList from './components/TripList';
import {useRef, useState} from 'react'

function App() {
  const [time, setTime] =useState(1);
  const [names, setNames] = useState([]);
  const [name, setName] = useState();
  const [id, setId] = useState(1);
  // const name = useRef();


  function UpdateTime(){
    const num = time + 1;
    setTime(num);
  }

  function AddNameHandler() {
    setNames((prev) =>
    {
      const m_Name = {id: id, Name: name};
      return [prev, m_Name];
    })
  }
  return (
    <div className="App">
      {/* <TripList/> */}
      <span>현재 시간 : {time}시</span>
      <button onClick={UpdateTime}>click</button>
      <p>
       <input type='text' onChange={(e)=>{
        console.log(e.target.value);
        setName(e.target.value);
       }}></input>
       <button onClick={AddNameHandler}>ADD</button>
      </p>


      {/* <form>
        <div>
          <label htmlFor='todo-text'>NAME : </label>
          <input type='text' id='todo-text'></input>
        </div>
        <button type='button' onClick={AddNameHandler}>click</button>
      </form> */}
      <ul>
          {
            names.map(n =>(
              <li key={n.id}>
                <p>{n.name}</p>
              </li>
            ))
          }
        </ul>
    </div>

  );
}

export default App;