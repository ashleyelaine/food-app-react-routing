import MainNav from './components/MainNav'
import './app.css'

export default function App() {
  return (
    <div>
      <h1>Food App Home</h1>
      <MainNav />
      <p>Yum!</p>
      <img style={{maxWidth: "300px", padding: "30px"}} alt="donut" src="/food/salad.png" />
    </div>
  );
}