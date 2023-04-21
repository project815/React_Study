import { useState } from 'react'
import './NewEventForm.css'

export default function NewEventForm({addEvent}) {
  const[title, setTitle] = useState('');
  const[date, setDate] = useState('');
  
    const resetHandler= ()=>{
        setTitle('');
        setDate('');        
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const eves ={
            title:title,
            date:date,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(eves);
        resetHandler();
        // console.log(events);
        
        // const event= 0;
    }
  return (
    <form className='new-event-from' onSubmit={handleSubmit}>
        <label>
            <span>Name : </span>
            <input 
            type='text' 
            onChange={(e)=>setTitle(e.target.value)}
            value={title}/>
        </label>
        <label>
            <span>Date : </span>
            <input 
            type='date' 
            onChange={(e)=>setDate(e.target.value)}
            value={date}/>
        </label>
      <button>Submit</button>
      <p>title : {title} date : {date}</p>
      <p onClick={resetHandler}>reset the form</p>
    </form>
  )
}
