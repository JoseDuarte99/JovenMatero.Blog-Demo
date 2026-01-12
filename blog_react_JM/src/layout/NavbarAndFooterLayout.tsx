// Import Style
import "./Layout.css"

// Import React
import { Outlet } from "react-router";
import { useState } from "react";

// Import Contexts
// Import Components
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


// Import Types
// Import Others


const NavbarAndFooterLayout = () => {

    // Category Menu Status
    const [ categoryState, setCategoryState] = useState(false);

  return (
    <div className="layout">
      <Navbar  categoryState={categoryState} setCategoryState={setCategoryState} />
        <div className="content" onClick={() => setCategoryState(false)}>
          <Outlet />
        </div>
      <Footer />
    </div>
  )
};

export default NavbarAndFooterLayout;