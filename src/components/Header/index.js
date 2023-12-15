import "./styles.scss";
import logo from 'src/assets/logo-portfolio.png';
import Link from './link';

const Header = () => (
    <div className="header">
        <div className="header__title-container">
            <img src={logo} alt="Mogo" className="header__logo"/>
            <h1 className="header__title">MOGO</h1>
        </div>
        <div className="header__link-container">
          <Link link="/" content="Présentation"/>
          <Link link="/parcours" content="parcours"/>
          <Link link="/competences" content="compétences"/>
          <Link link="/projets" content="projets"/>
          <Link link="/contact" content="contact"/>
        </div>
    </div>
);

export default Header;
