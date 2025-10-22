import { Outlet } from "react-router";
import "./Layout.css"


const WithoutNavbarAndFooter = () => (
    <main className="main">
        <Outlet />
    </main>
);

export default WithoutNavbarAndFooter;
