// Import Style
import "./Layout.css"

// Import React
import { Outlet } from "react-router";

// Import Contexts
// Import Components
import SimpleHeader from "../components/SimpleHeader/SimpleHeader";

// Import Types
// Import Others


const WithoutNavbarAndFooter = () => (
    <div className="layout">
        <SimpleHeader />
            <main className="content">
                <Outlet />
            </main>
    </div>
);

export default WithoutNavbarAndFooter;
