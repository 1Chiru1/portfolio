import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
        {/* <Projects /> */}{" "}
        {/* Projects section is commented out to add later on */}
        <Experience />
        <Passion />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
export default App;
