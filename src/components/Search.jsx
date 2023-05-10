import { useState } from "react";
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/flights'

const Search = (props) => {

    const [ flights, setFlights ] = useState([])

    const fetchFlights = (search) => {
        axios(SERVER_URL).then((response) => {
            let allFlights = response.data
            let flightSearchResults = [];
          
            for ( let i = 0; i < allFlights.length; i ++ ) {
                if (allFlights[i].from === search[1] && allFlights[i].to === search[0]) {
                    flightSearchResults.push(allFlights[i]);
                };
            };

            setFlights(flightSearchResults);
            console.log(allFlights);
            console.log(flightSearchResults);
            props.passedUpSearch(flightSearchResults)
        });
    };

    return (
        <div className="container">
            Search
            <h1 className="title">Virgin Airlines</h1>
             <SearchForm onSubmit={ fetchFlights }/>
             <SearchResults searchResults={ flights }/>
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
                <button className="button">Search Flights</button>
            </form>
        </div> 
    );
};

const SearchResults = (props) => {

    return (
        <div>
            <h3>Flight Search Results</h3>
            <div className="grid-container">
                <div className="grid-item table-header">Date</div>
                <div className="grid-item table-header">Flight</div>
                <div className="grid-item table-header">From > To</div>
                <div className="grid-item table-header">Plane</div>
            </div>
            <div>
                { props.searchResults.map( (result) => {
                    return (
                    <div key={ result.id } className="grid-row">
                        <div className="grid-item">
                            { result.date }
                        </div>
                        <div  className="grid-item">
                            <a href={"/flights/" + result.id }>{ result.id }</a>
                        </div>
                        <div className="grid-item">
                            { result.from } > { props.searchResults[0].to }
                        </div>
                        <div className="grid-item">
                            { result.airplane_id }
                        </div>  
                    </div>
                    );
                })}
            </div>
        </div>
    );
};