import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Contact from './components/Contact';
import About from './components/About';
import Projects from './components/Projects'



function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <About />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
