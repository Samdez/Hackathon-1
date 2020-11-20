import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import tripContext from "../contexts/tripContext";

// import Layout from "./Layout";
import Home from "./Home";
import Layout from "./Layout";
import Trip from "./Trip";
import TripSearchResults from "./TripSearchResults";

const Router = () => {
  const [departureCity, setDepartureCity] = useState(
    "Select your departure city"
  );
  const [arrivalCity, setArrivalCity] = useState("Select your arrival city");
  const [departureCityCoordinates, setDepartureCityCoordinates] = useState("");
  const [arrivalCityCoordinates, setArrivalCityCoordinates] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date("1920-11-20"));
  return (
    <BrowserRouter>
      <tripContext.Provider
        value={{
          departureCity,
          setDepartureCity,
          arrivalCity,
          setArrivalCity,
          departureCityCoordinates,
          setDepartureCityCoordinates,
          arrivalCityCoordinates,
          setArrivalCityCoordinates,
          selectedDate,
          handleDateChange,
        }}
      >
        <Layout>
          <Switch>
            <Route path="/trip-search-results" component={TripSearchResults} />
            <Route path="/trip" component={Trip} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </tripContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
