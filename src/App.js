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
         <h1 className = "appTitle">Chopstick Spy</h1>

         </div>
         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Ingame" element={<Ingame/>}/>
           <Route path="/Scoreboard" element={<Scoreboard/>}/>
         </Routes> 
         </div>
      </div>
  );
}

export default App;
