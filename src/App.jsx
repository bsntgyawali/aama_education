import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import AbroadStudy from "./pages/AbroadStudy";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Counselling from "./pages/Counselling";
import Courses from "./pages/Courses";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./mquery.css";
const App = () =>{

    return(
       <div className="app">
       <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/abroadstudy/:countryName" element={<AbroadStudy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/counselling" element={<Counselling />} />
            <Route path="/courses/:courseName" element={<Courses />} />
        </Routes>
        <Footer />
       </BrowserRouter>
       </div>
    );
}

export default App;