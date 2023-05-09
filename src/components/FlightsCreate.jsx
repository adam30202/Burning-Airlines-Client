import { useEffect, useState } from 'react';
import axios from 'axios';

const SERVER_URL  = 'http://localhost:3000';

const FlightsCreate = () => {
    const [flightNumber, setFlightNumber] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [planeId, setPlaneID] = useState('')
    const [airplanes, setAirplanes] = useState('');

    const fetchAirplanes = () => {
        axios(SERVER_URL).then((response) => {
            setAirplanes(response.data);
        });
    };

    useEffect(fetchAirplanes, []); 

    const saveAirplanes = (content) => {
        axios.post(SERVER_URL, {content: content}).then((response) => {
            setAirplanes([...flights, response.data]);
        });
    };
    
    return (
        <div>
            FlightsCreate cometh
        </div>
    );
};

export default FlightsCreate;