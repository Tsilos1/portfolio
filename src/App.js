import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
    </div>
  );
}

export default App;
