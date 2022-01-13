import { NavLink, Outlet } from "react-router-dom"
import { getFoods } from "../data"
import MainNav from '../components/MainNav'

export default function FoodPage() {
  let foods = getFoods().sort()

  return (
    <>
      <div>
        <h1>About</h1>
        <MainNav />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <nav
          style={{
            borderRight: "solid 3px #888",
            padding: "1rem"
          }}
        >
          {foods.map(food => (
            <NavLink
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                fontWeight: isActive ? "bold" : ""
              };
            }}
              to={`/food/${food.id}`}
              key={food.id}
            >
              {food.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}