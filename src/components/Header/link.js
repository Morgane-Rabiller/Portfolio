import './styles.scss';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

const Link = ({ link, content, closeSidebar }) => (
    <NavLink
        to={link}
        className={({ isActive }) =>
            isActive ? "ml-6 header__link--active" : "ml-6"
        }
        onClick={closeSidebar}
    >
        {content}
    </NavLink>
);

Link.propTypes = {
  link: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  closeSidebar: PropTypes.func
}

Link.defaultProps = {
  closeSidebar: () => {}
}

export default Link;
