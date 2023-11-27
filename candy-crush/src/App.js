
import './App.css';
import Game from './components/Game';
import LevelHistory from './components/LevelHistory';
import GameLevel from './components/GameLevel';
import ScoreCard from './components/ScoreCard';
import Mission from './components/Mission';

function App() {
  return (
    <div className="App">
     <LevelHistory/>
     <div className="cardBoard"> 
     <Game/>
     <ScoreCard/>
     <GameLevel/>
     </div>
<Mission/>
    </div>
  );
}

export default App;
