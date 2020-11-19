import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import tripContext from '../contexts/tripContext';
import moment from 'moment';
import TravelCard from "./TravelCard";

const TripSearchResults = () => {
  const {
    departureCity,
    arrivalCity,
    selectedDate,
    departureCityCoordinates,
    arrivalCityCoordinates,
  } = useContext(tripContext);
  // const formatedDate = ;
  const apiURL = 'https://public-api.blablacar.com';
  const search = '/api/v3/trips/?';
  const key = 'key=dNuojyjDSdhDtLc0HWMRHie0u98j2En9';
  const radius = "radius_in_meters=100000";
  const currency = '&locale=fr-FR&currency=EUR';
  const formatDepartureCityCoordinates = `&from_coordinate=${departureCityCoordinates}`
  const formatArrivalCityCoordinates = `&to_coordinate=${arrivalCityCoordinates}`
  const [tripList, setTripList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const format1 = "yyyy-M-DT";
  const formatDate = moment(selectedDate).format(format1);
  const formatedDate = `&start_date_local=${formatDate}08:00:00&`
  const tripRequest = apiURL.concat('', search, key, formatDepartureCityCoordinates, formatArrivalCityCoordinates, currency, formatedDate, radius);
  console.log(selectedDate)


  //Request for Bordeaux Paris
  useEffect(() => {
    Axios.get(tripRequest)
    .then(res => res.data)
    .then(data => setTripList(data.trips))      
    .then(setIsLoading(false))
  }, [formatedDate])

  if(isLoading){
    return <h1>Loading</h1>
  }



  return ( 
    <>
    {tripList.map(tripListItem => {
      const link = tripListItem.link
      const idIndex = link.indexOf('&') + 4;
      const id = link.slice(idIndex)
      return <TravelCard 
      key={id}
      departure = {tripListItem.waypoints[0].place.city}
      arrival = {tripListItem.waypoints.reverse()[0].place.city}
      duration = {Math.round(tripListItem.duration_in_seconds) / 3600}
      price = {tripListItem.price.amount} 
      />
    })}
   </>
   );
}
 
export default TripSearchResults;