import Router from "./components/Router";

import TravelCard from "./components/TravelCard";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import "./App.css";

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <Router />
      </div>
      <TravelCard />
    </MuiPickersUtilsProvider>
    
  );
}

export default App;
