import "./styles.scss";
import logo from "src/assets/logo-portfolio.png";
import Link from "./link";
import { Sidebar } from "primereact/sidebar";
import { Button } from 'primereact/button';
import { useState } from "react";

const Header = () => {
  
  const [visible, setVisible] = useState(false);
    return (
        <div className="header">
            <div className="header__title-container">
                <img src={logo} alt="Mogo" className="header__logo" />
                <h1 className="header__title">MOGO</h1>
            </div>
            <div className="header__link-container hidden md:block">
                <Link link="/" content="Présentation" />
                <Link link="/parcours" content="parcours" />
                <Link link="/competences" content="compétences" />
                <Link link="/projets" content="projets" />
                <Link link="/contact" content="contact" />
            </div>
            
            <Sidebar visible={visible} onHide={() => setVisible(false)} className="header__sidebar">
                <h2>Menu</h2>
                <div className="flex flex-column">
                <Link link="/" content="Présentation" />
                <Link link="/parcours" content="parcours" />
                <Link link="/competences" content="compétences" />
                <Link link="/projets" content="projets" />
                <Link link="/contact" content="contact" />
            </div>
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="header__button block h-3rem w-3rem flex md:hidden"/>
        </div>
    );
};

export default Header;
