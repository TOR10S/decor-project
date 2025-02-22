import css from "./NavBar.module.css"


function NavBar() {

  return (
        <nav className={css.navigation}>
          <ul className={css.navigationList}>
            <li className={css.navigationOption}>
              <a href="">Головна</a>
            </li>
            <li className={css.navigationOption}>
              <a href="">Галерея</a>
            </li>
            <li className={css.navigationOption}>
              <a href="">Відгуки</a>
            </li>
          </ul>
        </nav>
  )
}

export default NavBar
