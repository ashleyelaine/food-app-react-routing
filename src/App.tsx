import MainNav from './components/MainNav'
import './app.css'

export default function App() {
  return (
    <div>
      <h1>Food App Home</h1>
      <MainNav />
      <p>Yum!</p>
      <img alt="donut" src="/food/salad.png" />
    </div>
  );
}