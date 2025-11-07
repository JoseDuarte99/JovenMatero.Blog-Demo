// Import Style
import "./Layout.css"

// Import React
import { Outlet } from "react-router";

// Import Contexts
// Import Components
// Import Types
// Import Others


const WithoutNavbarAndFooter = () => (
    <main className="main">
        <Outlet />
    </main>
);

export default WithoutNavbarAndFooter;
