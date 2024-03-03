import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="shadow-md sticky top-0 z-10">
        <NavBar />
      </div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
