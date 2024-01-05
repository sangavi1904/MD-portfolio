
import './Sara.css';
import Card from './Card'
import Contact from './Contact'
import Home from './Home'
import Certificate from './Certificate';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home />
        <Certificate />
        <Card />
        <Client/>
        <Contact />


      </BrowserRouter>

    </div>
  );
}

export default App;
