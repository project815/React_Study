import './App.css';
import TripList from './components/TripList';
import {useState} from 'react'

function App() {
  const [time, setTime] =useState(1);
  const [name, setName] = useState([]);


  function UpdateTime(){
    const num = time + 1;
    setTime(num);
  }

  function AddNameHandler() {
    console.log('todo-text');
  }

  return (
    <div className="App">
      {/* <TripList/> */}
      <span>현재 시간 : {time}시</span>
      <button onClick={UpdateTime}>click</button>

      <form>
        <div>
          <label htmlFor='todo-text'>NAME : </label>
          <input type='text' id='todo-text'></input>
        </div>
        <button type='button' onClick={AddNameHandler}>click</button>
      </form>
      <ul>
          {
            name.map(n =>(
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