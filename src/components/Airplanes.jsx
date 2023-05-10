import { useState, useEffect } from 'react';
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/airplanes'; //change to appropriate route later

const Airplanes = () => {
    const [airplanes, setAirplanes] = useState([]);
    const [airplane, setAirplane] = useState('');
    const [rows, setRows] = useState('');
    const [columns, setColumns] = useState('');

    const fetchAirplanes = () => {
        axios(SERVER_URL).then((response) => {
            setAirplanes(response.data);
        });
    };

    // useEffect(fetchAirplanes, []);

    const saveAirplanes = (airplane, rows, columns) => {
        axios.post(SERVER_URL, { airplane, rows, columns }).then((response) => {
            setAirplanes([...airplanes, response.data]); //Add new airplane to the state, triggers a re-render
        console.log(response.data);
        });
    };
        
        return (
            <div>
            <p>New plane</p>
            <AirplaneForm onSubmit={(airplane, rows, columns) =>  saveAirplanes(airplane, rows, columns)}
            setAirplane={setAirplane}
            setRows={setRows}
            setColumns={setColumns}
             />
            <AirplanesList airplanes={ airplanes } />
        </div>
    );
};

    

const AirplaneForm = ({ onSubmit, setAirplane, setRows, setColumns }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(airplane, rows, columns);
      setAirplane('');
      setRows('');
      setColumns('');
    };
  
    const handleAirplaneChange = (e) => {
      setAirplane(e.target.value);
    };
  
    const handleRowsChange = (e) => {
      setRows(e.target.value);
    };
  
    const handleColumnsChange = (e) => {
      setColumns(e.target.value);
    };
  
    const [airplane, rows, columns] = [setAirplane, setRows, setColumns];
  
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
            <input type="text" onChange={handleColumnsChange} required />
          </label>
          <button type="submit">Add airplane</button>
        </form>
      </div>
    );
  };

const AirplanesList = (props) => {
    return (
        <div>
            { props.airplanes.map( (s) => <p key={ s.id }>{ s.content }</p> ) }
        </div>
    );
};

export default Airplanes;