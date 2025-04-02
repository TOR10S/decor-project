import css from "./NavBar.module.css"
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.navigationOption, isActive && css.active);
};


function NavBar() {

  return (
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            <li>
              <NavLink to="/" className={buildLinkClass}>Головна</NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={buildLinkClass}>Галерея</NavLink>
            </li>
          </ul>
        </nav>
  )
}

export default NavBar
