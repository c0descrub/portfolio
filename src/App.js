import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import WorkHistory from "./components/WorkHistory";
import Education from "./components/Education";
import Contact from "./components/Contact";
import About from "./components/About";
import SideNav from "./components/SideNav";

function App() {
  return (
    <>
      <Navigation />
      <div className="main-container">
        <Hero />
        <About />
        <Projects />
        <WorkHistory />
        <Education />
        <Contact />
        <SideNav />
      </div>
    </>
  );
}

export default App;
