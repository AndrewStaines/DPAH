// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Main from './components/Main';
import Comp from './components/Comp';
import Result from './components/Result';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/signup' element={< Signup />} />
      <Route path='/login' element={< Login />} />
      <Route path='/home' element={< Home />} />
      <Route path='/about' element={< About />} />
      <Route path='/contact' element={< Contact />} />
      <Route path='/comp' element={< Comp />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
