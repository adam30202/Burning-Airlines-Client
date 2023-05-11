import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FlightsShow = (props) => {
    const { flightNumber } = useParams({})

    console.log(flightNumber)
    console.log(props.results)
    return (
        <div className="flight-show-container">
            { props.results[0][0].date } | Flight { props.results[0][0].id } | { props.results[0][0].from } > { props.results[0][0].to }
            <Seats />
        </div>
    );
};

const Seats = (props) => {
    const numRows = 6; // Change this to match the number of rows on the airplane
    const numCols = 4; // Change this to match the number of columns on the airplane
    
    // Create an array of row numbers to use as keys for the seat divs
    const rows = Array.from(Array(numRows).keys());
    
    // Create an array of column letters to use as labels for the seat divs
    const cols = ['A', 'B', 'C', 'D'].slice(0, numCols);
    
    return (
      <div className="seats-container">
        {rows.map((row) => (
          <div className="seat-row" key={row}>
            {cols.map((col) => (
              <div className="seat" key={row + col}>
                {row + col}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
};

export default FlightsShow;