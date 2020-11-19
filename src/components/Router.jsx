import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import tripContext from "../contexts/tripContext";

// import Layout from "./Layout";
import Home from "./Home";
import Layout from "./Layout";
import Trip from "./Trip";

const Router = () => {
  const [departureCity, setDepartureCity] = useState(
    "Selectionnez votre ville de départ"
  );
  const [arrivalCity, setArrivalCity] = useState(
    "Selectionnez votre ville d'arrivée"
  );
  const [departureCityCoordinates, setDepartureCityCoordinates] = useState("");
  const [arrivalCityCoordinates, setArrivalCityCoordinates] = useState("");
  const [selectedDate, handleDateChange] = useState(new Date());
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
            <Route path="/trip" component={Trip} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </tripContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
