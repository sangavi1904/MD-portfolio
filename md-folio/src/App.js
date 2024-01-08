
import './Sara.css';
import Card from './Components/Card'
import Contact from './Components/Contact'
import Home from './Components/Home'
import Certificate from './Components/Certificate';
import Client from './Components/Client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Technical from './Components/Technical';
import Idfc from './Idfc';
import Cardinside from './Cardinside';
import Smart from './Smart';
import Trading from './Trading';
import Transaction from './Transaction';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Home />} />

          <Route path='/Idfc' element={<Idfc/>} />
          <Route path='/Cardinside' element={<Cardinside/>} />
          <Route path='/Smart' element={<Smart/>} />
          <Route path='/Trading' element={<Trading/>} />
          <Route path='/Transaction' element={<Transaction/>} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
