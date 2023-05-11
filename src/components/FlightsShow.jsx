import { useParams } from "react-router-dom";
import { useEffect } from "react";

const FlightsShow = (props) => {
    const { flightNumber } = useParams({})

    console.log(flightNumber)
    console.log(props.results)
    return (
        <div className="flight-show-container">
            { props.results[0][0].date } | Flight { props.results[0][0].id } | { props.results[0][0].from } > { props.results[0][0].to }
        </div>
    );
};

export default FlightsShow;