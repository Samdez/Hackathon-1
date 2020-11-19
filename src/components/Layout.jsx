import Header from "./Header";
import Footer from "./Footer";
import { Container } from "@material-ui/core";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </div>
  );
};
export default Layout;
