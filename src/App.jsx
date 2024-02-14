import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CatsList from "./components/CatsList";
import useData from "./hooks/useData";
import DogsList from "./components/DogsList";
import "./App.css";
import PetDetailsPage from "./pages/PetDetailsPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";


function App() {
  const { pets } = useData();
  
  return (
    <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage pets={pets} />} />
        <Route path="/cats" element={<CatsList pets={pets} />} />
        <Route path="/dogs" element={<DogsList pets={pets} />} />
        <Route path="/pets/:id" element={<PetDetailsPage pets={pets} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
