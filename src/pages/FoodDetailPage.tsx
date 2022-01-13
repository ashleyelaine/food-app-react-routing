import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getFoods } from '../data'
import { IFood } from '../interfaces/Food'
 
export default function FoodDetailPage() {
  const { foodId } = useParams();
  const [food, setFood] = useState<IFood>();

  let foods = getFoods()

  const getFood = (foodId: string | undefined) => {
    let food = foods.find(
      food => food.id === foodId
    );
    setFood(food)
  };
  
  useEffect(() => {
    getFood(foodId);
   });

  return (
    <main style={{ padding: "1rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
      <h2 style={{paddingBottom: "10px"}}>{food?.name}</h2>
      <h3><i>{food?.type }</i></h3>
      <img style={{maxWidth: "300px", padding: "30px"}} alt={food?.name} src={food?.image } />
    </main>
  )}