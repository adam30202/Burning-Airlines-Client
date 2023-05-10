import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = "http://localhost:3000";

const Reservation = () => {
    const [user, setUser] = useState(null); // state variable user, initial value null
    const [reservations, setReservations] = useState([]); //state variable reservation, initial value is an empty array 

    useEffect(fetchReservations, []);
    };