import './styles.scss';
import { NavLink } from "react-router-dom";

const Link = ({ link, content }) => (
    <NavLink
        to={link}
        className={({ isActive }) =>
            isActive ? "ml-6 header__link--active" : "ml-6"
        }
    >
        {content}
    </NavLink>
);

export default Link;
