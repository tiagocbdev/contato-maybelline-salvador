import { NavLink } from "react-router-dom";
import "./style.scss";

export function Home() {
    return (
        <>
            <header className="header">
                <h1>Nossos Quiosques em Salvador</h1>
            </header>

            <main className="kiosks">
                <p>
                    Clique no quiosque de sua preferência para ver as opções de contato e
                    maiores informações sobre nossa localização
                </p>
                <NavLink to="/quiosque/aeroporto">
                    <button>Aeroporto</button>
                </NavLink>
                <NavLink to="/quiosque/bahia">
                    <button>Shopping da Bahia</button>
                </NavLink>
                <NavLink to="/quiosque/barra">
                    <button>Shopping Barra</button>
                </NavLink>
                <NavLink to="/quiosque/paralela">
                    <button>Shopping Paralela</button>
                </NavLink>
                <NavLink to="/quiosque/salvador">
                    <button>Salvador Shopping</button>
                </NavLink>
            </main>
        </>
    );
}
