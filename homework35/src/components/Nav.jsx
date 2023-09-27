import { NavLink } from "react-router-dom"
import '../scss/nav.scss'

const Nav = () => {
  return (
    <nav>
        <ul className="nav_ul">
            <li className="nav_li"> <NavLink to='/'>Контакти</NavLink></li>
            <li className="nav_li"><NavLink to='/add'>Додати новий контакт</NavLink></li>
        </ul>
    </nav>
  )
}

export default Nav