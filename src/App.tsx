import "./App.css";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";

function App() {
  return (
    <>
      <Nav />
      <div className="container">
        <Hero />
      </div>
    </>
  );
}

export default App;
