import "./styles.scss";
import logo from "src/assets/logo-portfolio.png";
import Link from "./link";
import { Sidebar } from "primereact/sidebar";
import { Button } from 'primereact/button';
import { useState, useCallback } from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const closeSidebar = () => {
    setVisible(false);
  };

  let classnameSidebar = "header__sidebar border-round-right-2xl ";
  let classnameSidebarTitle = "header__sidebar--title text-center mb-7 ";

  switch (location.pathname) {
    case "/":
      classnameSidebar += "main-color";
      classnameSidebarTitle += "main-color";
      break;
    case "/parcours":
      classnameSidebar += "career-color";
      classnameSidebarTitle += "career-color";
      break;
    case "/competences":
      classnameSidebar += "skills-color";
      classnameSidebarTitle += "skills-color";
      break;
    case "/projets":
      classnameSidebar += "projects-color";
      classnameSidebarTitle += "projects-color";
      break;
    case "/contact":
      classnameSidebar += "contact-color";
      classnameSidebarTitle += "contact-color";
      break;
    default: {
      classnameSidebar += "main-color";
      classnameSidebarTitle += "main-color"
    }
    break;
  }

    return (
        <div className="flex justify-content-between">
            <div className="flex align-items-center">
                <img src={logo} alt="Mogo" className="w-5rem h-7rem mr-3 md:w-7rem md:h-10rem md:mr-5" />
                <h1 className="header__title text-4xl md:text-6xl"> <strong>MOGO</strong></h1>
            </div>
            <div className="mt-3 mr-3 hidden lg:block">
                <Link link="/" content="Présentation" />
                <Link link="/parcours" content="parcours" />
                <Link link="/competences" content="compétences" />
                <Link link="/projets" content="projets" />
                <Link link="/contact" content="contact" />
            </div>
            
            <Sidebar visible={visible} onHide={() => setVisible(false)} className={classnameSidebar}>
                <h2 className={classnameSidebarTitle}>MENU</h2>
                <div className="flex flex-column font-bold gap-5 w-11rem">
                <Link link="/" content="Présentation" closeSidebar={closeSidebar} />
                <Link link="/parcours" content="parcours" closeSidebar={closeSidebar} />
                <Link link="/competences" content="compétences" closeSidebar={closeSidebar} />
                <Link link="/projets" content="projets" closeSidebar={closeSidebar} />
                <Link link="/contact" content="contact" closeSidebar={closeSidebar} />
            </div>
            </Sidebar>
            <Button icon="pi pi-bars" onClick={() => setVisible(true)} className="header__button block h-3rem w-3rem border-none flex lg:hidden"/>
        </div>
    );
};

export default Header;
