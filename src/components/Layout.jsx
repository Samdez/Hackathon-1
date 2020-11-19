import PassengerComponent from "./Passenger";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <PassengerComponent />
      <Footer />
    </div>
  );
};
export default Layout;
