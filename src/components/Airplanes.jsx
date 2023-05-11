import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/airplanes'; //change to appropriate route later

const Airplanes = () => {
    
    const [airplanes, setAirplanes] = useState([]);


    const fetchAirplanes = () => {
        axios(SERVER_URL).then((response) => {
            setAirplanes(response.data);
        });
    };

    useEffect(fetchAirplanes, []);

    const saveAirplanes = (content) => {
        console.log(content);
        // console.log('Airplane:', airplane);
        // console.log('Rows:', rows);
        // console.log('Columns:', column);

        axios.post(SERVER_URL, { flight_id: content.airplane, rows: content.rows, column: content.column
        } ).then((response) => {
          console.log(response);
            setAirplanes([...airplanes, response.data]); //Add new airplane to the state, triggers a re-render
        console.log(response.data);
        });
    };
        
        return (
            <div>
            <p>New plane</p>
            <AirplaneForm onSubmit={saveAirplanes} />
            <AirplanesList airplanes={ airplanes } />
        </div>
    );
};

    

const AirplaneForm = ({ onSubmit }) => {
    const [content, setContent] = useState({
      airplane: 0,
      rows: '',
      column: ''
    });
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(content);
    };

  
    const handleAirplaneChange = (e) => {
      setContent(prevState => ({
        ...prevState,
        airplane: Number(e.target.value)
      }));
    };
      
  
    const handleRowsChange = (e) => {
      setContent(prevState => ({
        ...prevState,
        rows: e.target.value
      }));
    
    };
  
    const handleColumnChange = (e) => {
      setContent(prevState => ({
        ...prevState,
        column: e.target.value
      }));
    };
  
    // const [airplane, rows, column] = [setAirplane, setRows, setColumn];
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Airplane:
            <input type="text" onChange={handleAirplaneChange} required />
          </label>
          <label>
            Rows:
            <input type="text" onChange={handleRowsChange} required />
          </label>
          <label>
            Columns:
            <input type="text" onChange={handleColumnChange} required />
          </label>
          <button type="submit">Add airplane</button>
        </form>
      </div>
    );
  };

const AirplanesList = (props) => {
    return (
        <div>
          { props.airplanes.map( (airplane) => <p key={ airplane.id }>{ airplane.rows }</p> ) }
        </div>
    );
};

export default Airplanes;