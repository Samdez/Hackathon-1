import PassengerComponent from "./Passenger";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <PassengerComponent />
      <Footer />
    </div>
  );
};
export default Layout;
