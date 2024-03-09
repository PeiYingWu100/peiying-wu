import "./App.css";
import About from "./sections/About/About";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Home from "./sections/Home/Home";
import NavBar from "./sections/NavBar/NavBar";
import Projects from "./sections/Projects/Projects";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
