import './TripList.css';
import {useState, useEffect, useCallback} from 'react';

export default function TripList () {
    // const [trips, setTrips] = useState([])

    // console.log(trips);

    // useEffect(()=>{
    // fetch()
    // .then(response => response.json())
    // .then(json => setTrips(json))
    // }, [])

    
    const [trips, setTrips]  = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')

    const fetchTrips = useCallback (async () => {
        const response = await fetch(url)
        const json = await response.json()
        setTrips(json)
    }, [url]);

    useEffect(() =>{
        fetchTrips()
    }, [url, fetchTrips]);

    // useEffec t(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     // .then(json => console.log(json))
    //     .then(json => setTrips(json))
    // }, [url])

    console.log(trips);

  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        <ul>
            {trips.map(trip => (
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>
        <div className="filters">
            <button onClick={()=>setUrl('http://localhost:3000/trips?loc=europe')}>European Trips</button>
            <button onClick={()=>setUrl('http://localhost:3000/trips?loc=america')}>America Trips</button>
            <button onClick={()=>setUrl('http://localhost:3000/trips')}>All Trips</button>
        </div>
    </div>
  )
}
