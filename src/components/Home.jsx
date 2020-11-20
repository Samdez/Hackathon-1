import PassengerComponent from "./Passenger";
import DriverComponent from "./Driver";
import IntroComponent from "./IntroductionApp";

function Home() {
  return (
    <div>
      <PassengerComponent />
      <DriverComponent />
      <IntroComponent />
    </div>
  );
}

export default Home;
