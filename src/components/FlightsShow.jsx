import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from 'axios';

const SERVER_URL_RESERVATIONS = 'http://localhost:3000/reservations'

const FlightsShow = (props) => {
    const { flightNumber } = useParams({})

    console.log(flightNumber)
    console.log(props.results)

    

    const _submitHandler = (event) => {
        event.preventDefault();
        console.log('function')

        axios.post(SERVER_URL_RESERVATIONS, { flight_id: 1, user_id: null,
        } ).then((response) => {
          console.log(response.data);
        });
    }

    return (
        <div className="flight-show-container">
            { props.results[0][0].date } | Flight { props.results[0][0].id } | { props.results[0][0].from } > { props.results[0][0].to }
            <Seats />
            <p className="seats-left">{ props.results[0][0].seats } Seats Left </p>
            <ReservationForm reserve={ _submitHandler }/>
        </div>
    );
};

const Seats = (props) => {
    const numRows = 6; // Change this to match the number of rows on the airplane
    const numCols = 4; // Change this to match the number of columns on the airplane
    
    // Create an array of row numbers to use as keys for the seat divs
    const rows = Array.from(Array(numRows), (_, i) => i + 1);
    
    // Create an array of column letters to use as labels for the seat divs
    const cols = ['A', 'B', 'C', 'D'].slice(0, numCols);
    
    return (
      <div className="seats-container">
        {rows.map((row) => (
          <div className="seat-row" key={row}>
            {cols.map((col) => (
              <button className="seat" key={row + col}>
                {row + col}
              </button>
            ))}
          </div>
        ))}
      </div>
    );
};

const ReservationForm = (props) => {
    return (
        <div className="reserve-button">
            <form onSubmit={ props.reserve }>
                <button id="reserve" >Reserve seat</button>
            </form>
        </div>
    )
}

export default FlightsShow;