import { Route, Routes } from 'react-router-dom';
import './App.css';
import CountDownPage from './Page/CountDownPage';
import Home from './Page/Home';
import Ingame from './Page/Ingame';
import Lose from './Page/Lose';
import Scoreboard from './Page/Scoreboard';
import Win from './Page/Win';

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
           <Route path="/wait" element={<CountDownPage/>}/>
           <Route path="/win" element={<Win/>}/>
           <Route path="/lose" element={<Lose/>}/>
         </Routes> 
         </div>
      </div>
  );
}

export default App;
