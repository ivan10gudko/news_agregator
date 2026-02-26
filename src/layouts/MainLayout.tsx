import { Outlet } from "react-router";

const MainLayout = () => {
    return  <div>
            <header>header</header>
            <Outlet />
            </div>
};

export default MainLayout;