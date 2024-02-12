import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import CatsList from "./components/CatsList";
import useData from "./hooks/useData";
import DogsList from "./components/DogsList";
import PetDetailsPage from "./pages/PetDetailsPage";

function App() {
  const { pets } = useData();

  return (
    <>
      <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cats" element={<CatsList pets={pets} />} />
        <Route path="/dogs" element={<DogsList pets={pets} />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
