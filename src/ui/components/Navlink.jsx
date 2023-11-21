import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const Navlink = ({ text, path }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        `nav-item nav-link ${isActive ? "active" : ""}`
      }
      to={`/${path}`}
    >
      {text}
    </NavLink>
  );
};

Navlink.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
