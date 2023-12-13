import './styles.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <NavLink to="/" className="header__link">Présentation</NavLink>
    <NavLink to="/parcours" className="header__link">parcours</NavLink>
    <NavLink to="/competences" className="header__link">compétences</NavLink>
    <NavLink to="/projets" className="header__link">projets</NavLink>
    <NavLink to="/contact" className="header__link">contact</NavLink>
  </div>
);

export default Header;
