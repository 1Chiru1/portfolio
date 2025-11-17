import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import "./App.css";
import Passion from "./components/Passion";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}
export default App;
