import { NavLink } from "react-router-dom";
import './styles.css';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Header() {

  const { logout } = useContext(AuthContext)

  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
    setNavbar(true);
    } else {
    setNavbar(false);
    }
  }

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'Navbar active' : 'Navbar'}>
      <ul className="menu-header">
        
        <li className="menu-item">
          <NavLink to="home">Home</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="contato">Contato</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="login">Login</NavLink>
        </li>

        <li className="menu-item">
          <NavLink to="perfil">Perfil</NavLink>
        </li>

        <li>
          <button onClick={logout}>Logout</button>
        </li>

      </ul>
    </nav>
  )
}

export default Header;