import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import tripContext from '../contexts/tripContext';

const TripSearchResults = () => {
  const {
    departureCity,
    arrivalCity,
    departureCityCoordinates,
    arrivalCityCoordinates,
    selectedDate,
  } = useContext(tripContext);
  const [userValues, setUserValues] = useState(false);
  const apiURL = 'https://public-api.blablacar.com';
  const search = '/api/v3/trips/?';
  const key = 'key=dNuojyjDSdhDtLc0HWMRHie0u98j2En9';
  const radius = 5000;
  const currency = 'EUR';
  const [tripList, setTripList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const tripRequest = apiURL.concat('', search, key, departureCityCoordinates, arrivalCityCoordinates, currency, selectedDate, radius)
  //Request for Bordeaux Paris
  useEffect(() => {
    Axios.get(tripRequest)
    .then(res => res.data)
    .then(data => setTripList(data.trips))      
    .then(setIsLoading(false))
  }, [tripRequest])

  if(isLoading){
    return <h1>Loading</h1>
  }
  


  return ( 
    
    // {tripList.map(tripListItem => {
    //   const link = tripListItem.link
    //   const idIndex = link.indexOf('&') + 4;
    //   const id = link.slice(idIndex)
    //   return <p key={id}>{id}</p>
    // })}
   );
}
 
export default TripSearchResults;