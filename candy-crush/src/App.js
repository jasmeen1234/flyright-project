
import './App.css';

import LevelHistory from './components/LevelHistory';
import GameLevel from './components/GameLevel';
import ScoreCard from './components/ScoreCard';
import Mission from './components/Mission';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
     <LevelHistory/>
     <div className="cardBoard"> 
     <Game/>
     {/* <Game1/> */}
     <ScoreCard/>
     <GameLevel/>
     </div>
<Mission/>
    </div>
  );
}

export default App;
