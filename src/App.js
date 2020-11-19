import Router from "./components/Router";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { apiURL, search} from './apiRequest';

const departureCityCoordinates = '44.837789,-0.57918';
const arrivalCityCoordinates = '48.866667,2.3333338';
const userStartDate = '2020-11-20T00:00:00';
const userEndDate = '2020-12-12T00:00:00';
const userRadius = 5000;

const key = 'key=dNuojyjDSdhDtLc0HWMRHie0u98j2En9';
const startDate = `&start_date_local=${userStartDate}`;
const endDate = `&end_date_local=${userEndDate}`;
const radius = `&radius_in_meters=${userRadius}`;
const currency = '&locale=fr-FR&currency=EUR';
const departureCity = `&from_coordinate=${departureCityCoordinates}`;
const arrivalCity = `&to_coordinate=${arrivalCityCoordinates}`;





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
        <Router />
      </div>
    </MuiPickersUtilsProvider>
  );
}

export default App;
