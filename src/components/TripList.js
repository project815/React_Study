import {useState, useEffect} from 'react';
export default function TripList () {
    const [trips, setTrips] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/trips')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => setTrips(json))
    }, [])

    console.log(trips);

const str = toString(trips);
  return (
    <div>
        <h2>Trip List</h2>
        <ul>
            {trips.map(trip =>(
                <li>{trip.id}</li>
                <li>{trip.tjtle}</li>
                <li>{trip.id}</li>
            ))}
        </ul>
    </div>
  )
}
