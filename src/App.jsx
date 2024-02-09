import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
    <Navbar />
      <Footer />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );  
}

export default App;
