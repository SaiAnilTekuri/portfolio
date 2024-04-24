import './App.css';
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Work from './components/Work';
import Wipropage from './components/Wipropage';
import Klpage from './components/Klpage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div>
        <Routes>        
          <Route path="/"  element={<Work/>} />
          <Route path="/about"  element={<About />}/>
          <Route path="/wipro"  element={<Wipropage />}/>
          <Route path="/knowledgelens"  element={<Klpage />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
