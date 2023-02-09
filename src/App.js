import logo from './logo.svg';
import './App.css';
import { Navbar } from './js/components';
import { Route, Routes } from 'react-router-dom';
import { Home, Contact } from './js/views';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/work-experience' element={<Contact />} />
        <Route path='/portfolio' element={<Contact />} />
        <Route path='/about-me' element={<Contact />} />
        <Route path='/contact-me' element={<Contact />} />
      </Routes>
      <header className="App-header">
        <p>loscar</p>
      </header>
    </div>
  );
}

export default App;
