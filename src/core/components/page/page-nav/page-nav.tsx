import { NavLink } from 'react-router-dom';
import './page-nav.scss';

export function PageNav() {
  return (
    <nav className="page-nav">
      <ul className="page-nav__list">
        <li className="page-nav__list-item">
          <NavLink
            className="page-nav__link"
            to="/"
            exact
            activeClassName="page-nav__link--active"
          >
            Home
          </NavLink>
        </li>
        <li className="page-nav__list-item">
          <NavLink
            className="page-nav__link"
            to="/characters"
            activeClassName="page-nav__link--active"
          >
            Characters
          </NavLink>
        </li>
        <li className="page-nav__list-item">
          <NavLink
            className="page-nav__link"
            to="/locations"
            activeClassName="page-nav__link--active"
          >
            Locations
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
