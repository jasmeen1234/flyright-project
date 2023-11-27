import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import bluecandy from "../Images/bluecandy.jpeg";

import {
  showValidCandies,
  showValidMoves,
} from "../redux/actions/actionCreator";
import GameWon from "./GameWon";
import Burst from "./Burst";

function Mission() {
  const [openModal, setOpenModal] = useState(false);
  const maxMoves = useSelector((state) => state.movesLeft);
  const candiesRemaining = useSelector((state) => state.candiesLeft);
  const candyGoal = useSelector((state) => state.missionGoal);

  const dispatch = useDispatch();

  useEffect(() => {
    if (candiesRemaining < 0) {
      dispatch(showValidCandies());
    }

    if (maxMoves >= 0 && candiesRemaining <= 0) {
      setOpenModal(true);
    }
    if (maxMoves <= 0) {
      dispatch(showValidMoves());
    }
  }, [candiesRemaining, maxMoves]);

  return (
    <div className="mission">
      <h4>{`Collect ${candyGoal} blue candies`}</h4>
      <div className="targetCount">
        <img src={bluecandy} alt="bluecandy" />
        <p>{`remaining : ${candiesRemaining}`}</p>
      </div>
      <div className="movesLeft">Moves Left : {maxMoves}</div>
      <Burst cleared={openModal} />
      <GameWon open={openModal} setOpen={setOpenModal} />
    </div>
  );
}

export default Mission;
