import { NavLink } from 'react-router-dom'

const MainNav = () => {
  return (
    <div className="main-nav">
      <nav
        style={{
          borderBottom: "solid 3px #888",
          paddingBottom: "1rem",
          marginBottom: "2rem"
        }}
      >
        <NavLink style={({ isActive }) => {return {fontWeight: isActive ? "bold" : ""};}} to="/">
          Home
        </NavLink> |{" "}
        <NavLink style={({ isActive }) => {return {fontWeight: isActive ? "bold" : ""};}} to="/about">
          About
        </NavLink> |{" "}
        <NavLink style={({ isActive }) => {return {fontWeight: isActive ? "bold" : ""};}} to="/food">
          Food
        </NavLink>
      </nav>
    </div>
  )
}

export default MainNav

