import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const FlightsShow = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    // Fetch flights data from the database
    fetchFlights();
  }, []);

  const fetchFlights = async () => {
    try {
      // Make an API request to fetch flights data
      const response = await fetch("/api/flights");
      const data = await response.json();

      // Update the flights state with the fetched data
      setFlights(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flight-show-container">
      {flights.map((flight) => (
        <div key={flight.id}>
          {flight.date} | Flight {flight.id} | {flight.from} > {flight.to}
        </div>
      ))}
    </div>
  );
};

export default FlightsShow;