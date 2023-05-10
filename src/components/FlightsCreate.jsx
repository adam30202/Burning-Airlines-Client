import { useEffect, useState } from 'react';
import axios from 'axios';

const SERVER_URL  = 'http://localhost:3000';

const FlightsCreate = () => {
    const [flightNumber, setFlightNumber] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [planeId, setPlaneID] = useState('');
    const [airplanes, setAirplanes] = useState('');

    const fetchAirplanes = () => { //HTTP GET request to server to fetch list of airplanes
        axios.get(`${SERVER_URL}/airplanes`)
          .then((response) => {
            setAirplanes(response.data);
          })
      };
    
      useEffect(() => {
        fetchAirplanes();
      }, []);
    
      const saveFlight = () => {
        const newFlight = {
          flight: {
            flightNumber: flightNumber,
            destination: destination,
            date: date,
            planeId: planeId,
          },
        };
    
        axios.post(`${SERVER_URL}/flights`, newFlight, { headers: { 'Content-Type': 'application/json' } })
          .then((response) => {
            console.log('Flight created:', response.data);
            // Reset the input fields
            setFlightNumber('');
            setDestination('');
            setDate('');
            setPlaneID('');
          })
      };
    
      return (
        <div>
          <h2>Create Flight</h2>
          <form onSubmit={saveFlight}>
            <label>
              Flight Number:
              <input
                type="text"
                value={flightNumber}
                onChange={(e) => setFlightNumber(e.target.value)}
                required
              />
            </label>
            <label>
              Destination:
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
            <label>
              Plane ID:
              <select value={planeId} onChange={(e) => setPlaneID(e.target.value)} required>
                <option value="">Select a plane</option>
                {airplanes.map((plane) => (
                  <option key={plane.id} value={plane.id}>
                    {plane.name}
                  </option>
                ))}
              </select>
            </label>
            <button type="submit">Create Flight</button>
          </form>
        </div>
      );
    };
    

export default FlightsCreate;