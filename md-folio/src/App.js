
import './Sara.css';
import Card from './Card'
import Contact from './Contact'
import Home from './Home'
import Certificate from './Certificate';
import Client from '../src/Client'
import { BrowserRouter } from 'react-router-dom'
import Skills from './Skills';
import Experience from './Experience';
import Technical from './Technical';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Skills/>
        <Certificate/>
        <Technical/>
        <Card />
        <Experience/>
        <Client/>
        <Contact />


      </BrowserRouter>

    </div>
  );
}

export default App;
