import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
