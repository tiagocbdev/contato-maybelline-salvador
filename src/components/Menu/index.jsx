import "./style.scss";
import { AiOutlineHome, AiOutlineInstagram } from "react-icons/ai";
import { GiShakingHands } from "react-icons/gi";
import { NavLink } from "react-router-dom";

export function Menu() {
    return (
        <nav className="navMenu">
            <NavLink to="/" title="Página Inicial">
                <AiOutlineHome size={25} />
                Início
            </NavLink>
            <a
                href="https://instagram.com/maybellinesalvador"
                target="_blank"
                title="Nosso Instagram"
            >
                <AiOutlineInstagram size={25} />
                Instagram
            </a>

        </nav>
    );
}
