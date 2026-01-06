// Import Style
import "./Layout.css"

// Import React
import { Outlet } from "react-router";

// Import Contexts
// Import Components
import  NavbarWithoutLogin  from "../components/NavbarWithoutLogin/NavbarWithoutLogin";
import Footer from "../components/Footer/Footer";

// Import Types
// Import Others


const NavbarAndFooterLayout = () => (
  <div className="layout">
    <NavbarWithoutLogin />
      <div className="content">
        <Outlet />
      </div>
    <Footer />
  </div>
);

export default NavbarAndFooterLayout;