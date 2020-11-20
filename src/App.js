import Router from "./components/Router";

import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";

import "./App.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";


export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Limelight',
    fontSize: '3em',
  }
})




function App() {


  // const [googleCoordinates, setGoogleCoordinates] = useState({});
  // const location = '16 avenue du 8 mai 1945 64100 Bayonne';



  //Requesting coordinates of location const with Geocoding API
  // useEffect(() => {
  //   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=AIzaSyA2Jr688A1D8BxQkxc62UYbTBpX4r7ieuU`)
  //   .then(res => res.data)
  //   .then(data => console.log(data))
  // }, [])


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
