import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route, 
} from "react-router-dom";

import Airplanes from "./components/Airplanes";
import Search from "./components/Search";
import FlightsCreate from "./components/FlightsCreate";
import FlightsShow from "./components/FlightsShow";

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>} />                {/* User Use */}
        <Route path="/flights/#" element={<FlightsShow/>} />  {/* User Use (Leads to FlightsCreate - need to fix) */}
        <Route exact path="/flightscreate" element={<FlightsCreate/>} />  {/* Admin Use */}
        <Route path="/airplanes" element={<Airplanes/>} />    {/* Admin Use */}
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App
