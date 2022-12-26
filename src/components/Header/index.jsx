import "./style.scss";
import Logo from "../../assets/images/logo.webp";

export function Header() {
  return (
    <img
      className="logoImage"
      src={Logo}
      alt="Logo Maybelline Salvador escrita em branco com fundo transparente. Escrita Maybelline New York"
    />
  );
}
