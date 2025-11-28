// Import Style
import "./Layout.css"

// Import React
import { Outlet } from "react-router";

// Import Contexts
// Import Components
import  Navbar  from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


// Import Types
// Import Others


const NavbarAndFooterLayout = () => (
  <div className="layout">
    <Navbar />
      <main className="content">
        <Outlet />
      </main>
    <Footer />
  </div>
);

export default NavbarAndFooterLayout;