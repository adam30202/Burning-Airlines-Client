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
    <div className="container">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Search/>} />                {/* User Use */}
        <Route path="/flights/#" element={<FlightsShow/>} />  {/* Leads to FlightsCreate - need to fix */}
        <Route exact path="/flights" element={<FlightsCreate/>} />  {/* Admin Use */}
        <Route path="/airplanes" element={<Airplanes/>} />    {/* Admin Use */}
      </Routes>
    </BrowserRouter>
    </div>
  );
};

export default App
