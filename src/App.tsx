import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Hero />
        <About />
      </div>
    </>
  );
}

export default App;
