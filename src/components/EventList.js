// import React from 'react'
import React from 'react'


export default function EventList({events, clickHandler}) {
  return (
    events.map((event, index)=>(
        <React.Fragment key={event.id}>
            <h2>{"index : " + index}{", event.id : "+ event.id}{", event.title : " +event.title}</h2>
            {/* <button onClick={(clickHandler(event.id))}>onClick</button> 바로실행 되어버림, 클릭해도 실행안됨 */} 
            <button onClick={()=>(clickHandler(event.id))}>Delete event</button> </React.Fragment>))
  )
}
