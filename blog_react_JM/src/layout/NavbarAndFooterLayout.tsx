// Import Style
import "./Layout.css"

// Import React
import { Outlet } from "react-router";
import { useState } from "react";


// Import Contexts
// Import Components
import  NavbarWithoutLogin  from "../components/NavbarWithoutLogin/NavbarWithoutLogin";
import Footer from "../components/Footer/Footer";

// Import Types
// Import Others


function NavbarAndFooterLayout() {
  
    // Category Menu Status
    const [ categoryState, setCategoryState] = useState(false);

  <div className="layout">
    <NavbarWithoutLogin categoryState={categoryState} setCategoryState={setCategoryState} />
      <div className="content">
        <Outlet />
      </div>
    <Footer />
  </div>
};

export default NavbarAndFooterLayout;