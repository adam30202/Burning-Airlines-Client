import { useParams } from "react-router-dom";

const FlightsShow = () => {
    const [ flightNumber ] = useParams('')

    return (
        <div>
            { flightNumber }
        </div>
    );
};

export default FlightsShow;