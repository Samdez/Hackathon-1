import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import tripContext from "../contexts/tripContext";

// import Layout from "./Layout";
import Home from "./Home";
import Layout from "./Layout";
import Trip from "./Trip";
import MyProfile from "./MyProfile";

const Router = () => {
  const [departureCity, setDepartureCity] = useState("");
  const [arrivalCity, setArrivalCity] = useState("");
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
            <Route path="/myprofile" component={MyProfile} />
            <Route path="/trip" component={Trip} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Layout>
      </tripContext.Provider>
    </BrowserRouter>
  );
};

export default Router;
