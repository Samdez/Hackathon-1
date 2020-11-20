import Router from "./components/Router";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import "./App.css";

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <Router />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
