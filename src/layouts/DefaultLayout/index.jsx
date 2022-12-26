import "./style.scss";
import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Menu } from "../../components/Menu";

export function DefaultLayout() {
    return (
        <div className="fullLayout">
            <Header />
            <Outlet />
            <Menu />
        </div>
    );
}
