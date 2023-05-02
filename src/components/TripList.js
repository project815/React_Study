/** @format */

import React, { useCallback, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch.js";

export default function TripList() {
  //   const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips } = useFetch(url);

  //   const fetchTrips = useCallback(async () => {
  //     const response = await fetch(url);
  //     const json = await response.json();
  //     setTrips(json);
  //   }, [url]);

  //   useEffect(() => {
  //     fetchTrips();
  //   }, [url, fetchTrips]);

  console.log(trips);
  return (
    <div className="trip-list">
      <h2>TripList</h2>
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div>
        <button
          onClick={() => setUrl("http://localhost:3000/trips?loc=europe")}
        >
          Europe Trips
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All Trips
        </button>
      </div>
    </div>
  );
}
