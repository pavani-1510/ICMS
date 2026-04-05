import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Artistic from './components/Artistic';
import Festive from './components/Festive';
import Dance from './components/Dance';
import Music from './components/Music';
import Craftstextiles from './components/Craftstextiles';
import Visualarts from './components/Visualarts';
import Heritage from './components/Heritage';
import Historic from './components/Historic';
import Languageliterature from './components/Languageliterature';
import Religious from './components/Religious';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/services/artistic' element={<Artistic/>}/>
        <Route path='/services/festive' element={<Festive/>}/>
        <Route path='/services/heritage' element={<Heritage/>}/>
        <Route path='/services/historic' element={<Historic/>}/>
        <Route path='/services/languageliterature' element={<Languageliterature/>}/>
        <Route path='/services/religious' element={<Religious/>}/>
        <Route path='/services/artistic/dance' element={<Dance/>}/>
        <Route path='/services/artistic/music' element={<Music/>}/>
        <Route path='/services/artistic/visualarts' element={<Visualarts/>}/>
        <Route path='/services/artistic/craftstextiles' element={<Craftstextiles/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
