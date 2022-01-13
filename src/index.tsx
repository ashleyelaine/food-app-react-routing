import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import FoodPage from "./pages/FoodPage";
import FoodDetailPage from "./pages/FoodDetailPage";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="food" element={<FoodPage />} >
        <Route path=":foodId" element={<FoodDetailPage />} />
      </Route>

      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  </BrowserRouter>,
  rootElement
);