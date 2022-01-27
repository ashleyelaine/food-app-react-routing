import { NavLink } from 'react-router-dom'

const MainNav = () => {
  return (
    <div>
      <nav className="main-nav">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink> |{" "}
        <NavLink className="nav-link" to="/about">
          About
        </NavLink> |{" "}
        <NavLink className="nav-link" to="/food">
          Food
        </NavLink>
      </nav>
    </div>
  )
}

export default MainNav

