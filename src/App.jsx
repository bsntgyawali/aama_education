import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Event from "./pages/Event";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

const App = () =>{
    return(
       <>
       <Navbar />
       <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/events" element={<Event />} />
            <Route path="/contact" element={<Contact />} />
       </Routes>
       <Footer />
       </>
    );
}

export default App;