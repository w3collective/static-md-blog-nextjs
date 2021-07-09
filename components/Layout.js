import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => (
  <>
    <Header />
    <main>{props.children}</main>
    <Footer />
  </>
);

export default Layout;
