import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import GameLost from "./GameLost";

function LevelHistory() {
  const wonGames = useSelector((state) => state.gamesWon);
  const lostGames = useSelector((state) => state.gamesLost);
  const movesRemaining = useSelector((state) => state.movesLeft);
  const candiesRemaining = useSelector((state) => state.candiesLeft);
  const [openLostModal, setOpenLostModal] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      if (movesRemaining <= 0 && candiesRemaining > 0) {
        setOpenLostModal(true);
      }
    }, 10);
  }, [movesRemaining]);

  return (
    <div className="history">
      <h3>Total Games Won : {wonGames}</h3>
      <h3>Total Games Lost : {lostGames}</h3>
      <GameLost  open={openLostModal} setOpen={setOpenLostModal} />
    
    </div>
  );
}

export default  LevelHistory;
