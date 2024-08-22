import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Chatbot from "./pages/Chatbot";


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/make-a-wish" element={<Chatbot />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
