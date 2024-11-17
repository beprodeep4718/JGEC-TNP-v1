import { BrowserRouter, Routes, Route } from "react-router-dom";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Recruiter from "./pages/Recruiter";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/recruiter" element={<Recruiter />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
