import PassengerComponent from "./Passenger";
import DriverComponent from "./Driver";
import Header from "./Header";
import IntroComponent from "./IntroductionApp";
import Footer from "./Footer";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <PassengerComponent />
      <DriverComponent />
      <IntroComponent />
      <Footer />
    </div>
  );
};
export default Layout;
