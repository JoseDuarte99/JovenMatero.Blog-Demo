// Import Style
import SimpleHeader from "../components/SimpleHeader/SimpleHeader";
import "./Layout.css"

// Import React
import { Outlet } from "react-router";

// Import Contexts
// Import Components
// Import Types
// Import Others


const WithoutNavbarAndFooter = () => (
    <div className="layout">
        <SimpleHeader />
            <main className="content">
            <Outlet />
            </main>
        {/* <Footer /> */}
    </div>
);

export default WithoutNavbarAndFooter;
