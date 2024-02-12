import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import PetDetailsPage from "./pages/PetDetailsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pets/:id" element={<PetDetailsPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
