import logo from './logo.svg';
import './App.css';
import Game from './components/Game';
import LevelHistory from './components/LevelHistory';
import GameLevel from './components/GameLevel';
import ScoreCard from './components/ScoreCard';

function App() {
  return (
    <div className="App">
     <LevelHistory/>
     <div className> 
     <Game/>
     <ScoreCard/>
     <GameLevel/>
     </div>

    </div>
  );
}

export default App;
