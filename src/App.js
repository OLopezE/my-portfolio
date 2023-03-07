import logo from './logo.svg';
import './App.css';
import { Navbar } from './js/components';
import { Route, Routes } from 'react-router-dom';
import {
  Home,
  Contact,
  Portfolio,
  AboutMe,
  Experience
} from './js/views';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work-experience' element={<Experience />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/about-me' element={<AboutMe />} />
        <Route path='/contact-me' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
