import { NavLink } from "react-router-dom";
import './styles.css';


function Header() {

  return (
    <nav className="menu-nav">
      <ul className="menu-header">
        
        <li className="menu-item">
          <NavLink to="task">Task</NavLink>
        </li>

      </ul>
    </nav>
  )
}

export default Header;