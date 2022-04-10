import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Ingame from './Page/Ingame';
import Scoreboard from './Page/Scoreboard';


function App() {
  return (
      <div>
         <div className="App">
         <div className="main">
         <h1 className = "appTitle">CHOPSTICK SPY</h1>
         </div>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/ingame" element={<Ingame/>}/>
           <Route path="/scoreboard" element={<Scoreboard/>}/>
         </Routes> 
         </div>
      </div>
  );
}

export default App;
