import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CarPage from "./pages/CarPage";

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="cars/:id" exact element={<CarPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
