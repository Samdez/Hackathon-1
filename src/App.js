import Router from "./components/Router";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";

function App() {

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Limelight',
    fontSize: '3em',
  }
})

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <div className="App">
        <ThemeProvider theme={theme}>
          <Router />
        </ThemeProvider>
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
