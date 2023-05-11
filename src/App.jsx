import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route, 
} from "react-router-dom";

import { useState } from "react";
import Airplanes from "./components/Airplanes";
import Search from "./components/Search";
import FlightsCreate from "./components/FlightsCreate";
import FlightsShow from "./components/FlightsShow";
import CurrentUser from "./components/CurrentUser";

function App() {



const [ currentUser, setCurrentUser ] = useState('Bob')
const [ searchResult, setSearchResult ] = useState({})

const passedUpSearch = (result) => {
  setSearchResult(result)
}

  return (
    <div>
    <CurrentUser user={ currentUser }/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search user={ currentUser } passedUpSearch={ passedUpSearch }/>} />                {/* User Use */}
        <Route path="/flights/:flightNumber" element={<FlightsShow user={ currentUser } results={ searchResult }/>} />  {/* User Use (Leads to FlightsCreate - need to fix) */}
        <Route exact path="/flights" element={<FlightsCreate user={ currentUser }/>} />  {/* Admin Use */}
        <Route path="/airplanes" element={<Airplanes user={ currentUser }/>} />    {/* Admin Use */}
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App
