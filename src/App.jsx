import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () =>{
    return(
        <>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <Contact />
        <Footer />
        </>
    );
}

export default App;