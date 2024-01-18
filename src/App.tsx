import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Hero />
        <About />
        <Projects />
      </div>
    </>
  );
}

export default App;
