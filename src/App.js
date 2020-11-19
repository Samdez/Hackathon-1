import "./App.css";
import axios from 'axios';
import { useEffect, useState } from "react";
import { apiURL, search} from './apiRequest';

const departureCityCoordinates = '44.837789,-0.57918';
const arrivalCityCoordinates = '48.866667,2.3333338';
const userStartDate = '2020-11-20T00:00:00';
const userEndDate = '2020-12-12T00:00:00';
const userRadius = 5000;

const startDate = `&start_date_local=${userStartDate}`;
const endDate = `&end_date_local=${userEndDate}`;
const radius = `&radius_in_meters=${userRadius}`;
const currency = '&locale=fr-FR&currency=EUR';
const departureCity = `&from_coordinate=${departureCityCoordinates}`;
const arrivalCity = `&to_coordinate=${arrivalCityCoordinates}`;


const tripRequest = apiURL.concat('', search, key, departureCity, arrivalCity, currency, startDate, endDate, radius)

function App() {

  const [tripList, setTripList] = useState({});
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
    axios.get(tripRequest)
    .then(res => res.data)
    .then(data => {setTripList(data.trips)})      
    .then(setIsLoading(false))
  }, [])

  if(isLoading){
    return <h1>Loading</h1>
  }

  return (
    <div className="App">
      <h1>BlaBlaCalèche</h1>
      {tripList.map(tripListItem => {
        const link = tripListItem.link
        const idIndex = link.indexOf('&') + 4;
        const id = link.slice(idIndex)
        return <p>{id}</p>
      })}
    </div>
  );
}

export default App;
