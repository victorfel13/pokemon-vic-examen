import "./Header.css";
import img from "../img/pokeball.png"

function Header() {
  return (
    <div className="Header__container">
      <img src={img} alt="Pokeball icon"  className="header__logo"/>
      <h3 className="Header__title">Pokedex</h3>
    </div>
  );
}

export default Header;