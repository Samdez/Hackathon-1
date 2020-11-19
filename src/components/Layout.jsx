import PassengerComponent from "./Passenger";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";

const Layout = () => {
  return (
    <div>
      <Header />
      <PassengerComponent />
      <Home />
      <Footer />
    </div>
  );
};
export default Layout;
