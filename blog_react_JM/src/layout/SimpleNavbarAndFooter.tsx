// Import Style
import "./Layout.css"

// Import React
import { Outlet } from "react-router";

// Import Contexts
// Import Components
import SimpleHeader from "../components/SimpleHeader/SimpleHeader";
import SimpleFooter from "../components/SimpleFooter/SimpleFooter";

// Import Types
// Import Others


const WithoutNavbarAndFooter = () => (
    <div className="layout">
        <SimpleHeader />
            <div className="content">
                <Outlet />
            </div>
        <SimpleFooter />
    </div>
);

export default WithoutNavbarAndFooter;
