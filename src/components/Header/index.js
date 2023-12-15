import "./styles.scss";
import { NavLink } from "react-router-dom";
import logo from 'src/assets/logo-portfolio.png';

const Header = () => (
    <div className="header">
        <div className="header__title-container">
            <img src={logo} alt="Mogo" className="header__logo"/>
            <h1 className="header__title">MOGO</h1>
        </div>
        <div className="header__link-container">
            <NavLink to="/" className="header__link">
                Présentation
            </NavLink>
            <NavLink to="/parcours" className="header__link">
                parcours
            </NavLink>
            <NavLink to="/competences" className="header__link">
                compétences
            </NavLink>
            <NavLink to="/projets" className="header__link">
                projets
            </NavLink>
            <NavLink to="/contact" className="header__link">
                contact
            </NavLink>
        </div>
    </div>
);

export default Header;
