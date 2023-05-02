/** @format */

import React, { useCallback, useEffect, useState } from "react";

export default function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  const fetchTrips = useCallback(async () => {
    const response = await fetch(url);
    const json = await response.json();
    setTrips(json);
  }, [url]);

  useEffect(() => {
    fetchTrips();
  }, [url, fetchTrips]);

  console.log(trips);
  return <div></div>;
}
