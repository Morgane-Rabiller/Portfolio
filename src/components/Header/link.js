import './styles.scss';
import { NavLink } from "react-router-dom";

const Link = ({ link, content }) => (
    <NavLink
        to={link}
        className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
        }
    >
        {content}
    </NavLink>
);

export default Link;
