import { useState } from "react";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/airplanes'

const Search = () => {

    const [ flights, setFlights ] = useState([])

    const fetchFlights = (search) => {
        console.log(search)
        axios(SERVER_URL).then((response) => {
            setFlights(response.data);
            console.log(response.data)
        });
    };


    return (
        <div className="container">
            Search
             <SearchForm onSubmit={ fetchFlights }/>
             <SearchResults />
        </div>
    );
};

export default Search;

const SearchForm = (props) => {

    const [ from, setFrom ] = useState('')
    const [ to, setTo ] = useState('')

    const _handleFromInput = (event) => {
        setFrom(event.target.value);
    };

    const _handleToInput = (event) => {
        setTo(event.target.value);
    };

    const _handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit([from, to])
    };

    return (
        <div>
            <form className="form" onSubmit= { _handleSubmit } >
                <input type="text" placeholder="from" onInput={ _handleFromInput }/>
                <input type="text" placeholder="to" onInput={ _handleToInput }/>
                <button>Search Flights</button>
            </form>
        </div> 
    );
};

const SearchResults = () => {
    return (
        <div>
            <h3>Flight Search Results</h3>
            <div className="grid-container">
                <div className="grid-item">Date</div>
                <div className="grid-item">Flight</div>
                <div className="grid-item">From > To</div>
                <div className="grid-item">Plane</div>
            </div>
        </div>
    )
};