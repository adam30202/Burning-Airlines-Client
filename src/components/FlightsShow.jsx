import { useParams } from "react-router-dom";

const FlightsShow = () => {
    const { flightNumber } = useParams({})

    console.log(flightNumber)

    return (
        <div>
           
        </div>
    );
};

export default FlightsShow;