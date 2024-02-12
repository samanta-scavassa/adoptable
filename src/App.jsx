import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CatsList from "./components/CatsList";
import useData from "./hooks/useData";
import DogsList from "./components/DogsList";
import "./App.css"

function App() {
  const { pets } = useData();

  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatsList pets={pets} />} />
        <Route path="/dogs" element={<DogsList pets={pets} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
