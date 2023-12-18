import "./styles.scss";
import logo from "src/assets/logo-portfolio.png";
import Link from "./link";
import { Sidebar } from "primereact/sidebar";
import { Button } from 'primereact/button';
import { useState } from "react";

const Header = () => {
  
  const [visible, setVisible] = useState(false);
    return (
        <div className="flex justify-content-between">
            <div className="flex align-items-center">
                <img src={logo} alt="Mogo" className="header__logo w-7rem h-10rem mr-5" />
                <h1 className="header__title text-6xl">MOGO</h1>
            </div>
            <div className="mt-3 mr-3 hidden md:block">
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
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="header__button block h-3rem w-3rem border-none flex md:hidden"/>
        </div>
    );
};

export default Header;
