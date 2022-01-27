import { NavLink, Outlet } from "react-router-dom"
import { getFoods } from "../data"
import MainNav from '../components/MainNav'

export default function FoodPage() {
  let foods = getFoods().sort()

  return (
    <>
      <div>
        <h1>Foodz</h1>
        <MainNav />
      </div>
      <div className="food-page">
        <nav>
          {foods.map(food => (
            <NavLink to={`/food/${food.id}`} key={food.id}>
              {food.name}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
    </>
  );
}