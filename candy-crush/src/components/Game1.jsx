import React,{useEffect, useState } from 'react';
import bluecandy from '../Images/bluecandy.jpeg';
import greencandy from '../Images/greencandy.jpeg';
import orangeColor from '../Images/greencandy.jpeg';
import redcandy from '../Images/redcandy.jpeg';
import yellowcandy from '../Images/yellowcandy.jpeg';
import purpleColor from '../Images/purpleColor.png';
import blank from '../Images/blank.png';
import { useDispatch } from "react-redux";
import {
  decreaseCandies,
  decreaseMoves,
  updateScore,
} from "../redux/actions/actionCreator";

const width = 10;
const candyColors = [bluecandy, greencandy, orangeColor, purpleColor, redcandy,yellowcandy];
function Game1() {
  const [currentCandyArrangement, setCurrentCandyArrangement] = useState([]);
  const [squareBeingDragged, setSquareBeingDragged] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [dragFlag, setDragFlag] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    createBoard();
  }, []);

  const checkForColumnOfFive = (array) => {
    let fiveColMatch = false;

    for (let i = 0; i < 60; i++) {
      const columnOfFive = [
        i,
        i + width,
        i + width * 2,
        i + width * 3,
        i + width * 4,
      ];
      const decidedCandy = array[i];
      const isBlank = array[i] === blank;

      if (
        columnOfFive.every((index) => array[index] === decidedCandy) &&
        !isBlank
      ) {
        dragFlag && dispatch(updateScore(5));
        columnOfFive.forEach((index) => (array[index] = blank));
        dragFlag && decidedCandy === bluecandy && dispatch(decreaseCandies(5));
        fiveColMatch = true;
      }
    }
    return fiveColMatch;
  };
  const checkForColumnOfFour = (array) => {
    let fourColMatch = false;
    for (let i = 0; i < 69; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedCandy = array[i];
      const isBlank = array[i] === blank;

      if (
        columnOfFour.every((index) => array[index] === decidedCandy) &&
        !isBlank
      ) {
        dragFlag && dispatch(updateScore(4));
        columnOfFour.forEach((index) => (array[index] = blank));
        dragFlag && decidedCandy === bluecandy && dispatch(decreaseCandies(4));
        fourColMatch = true;
      }
    }
    return fourColMatch;
  };
  const checkForRowOfFive = (array) => {
    let fiveRowMatch = false;
    const notValid = [
      6, 7, 8, 9, 16, 17, 18, 19, 26, 27, 28, 29, 36, 37, 38, 39, 46, 47, 48,
      49, 56, 57, 58, 59, 66, 67, 68, 69, 76, 77, 78, 79, 86, 87, 88, 89, 96,
      97, 98, 99,
    ];

    for (let i = 0; i < 100; i++) {
      const rowOfFive = [i, i + 1, i + 2, i + 3, i + 4];
      const decidedCandy = array[i];
      const isBlank = array[i] === blank;

      if (notValid.includes(i)) continue;

      if (
        rowOfFive.every((index) => array[index] === decidedCandy) &&
        !isBlank
      ) {
        dragFlag && dispatch(updateScore(5));
        rowOfFive.forEach((index) => (array[index] = blank));
        dragFlag && decidedCandy === bluecandy && dispatch(decreaseCandies(5));
        fiveRowMatch = true;
      }
    }
    return fiveRowMatch;
  };
  const checkForRowOfFour = (array) => {
    let fourRowMatch = false;
    const notValid = [
      7, 8, 9, 17, 18, 19, 27, 28, 29, 37, 38, 39, 47, 48, 49, 57, 58, 59, 67,
      68, 69, 77, 78, 79, 87, 88, 89, 97, 98, 99,
    ];

    for (let i = 0; i < 100; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedCandy = array[i];
      const isBlank = array[i] === blank;

      if (notValid.includes(i)) continue;

      if (
        rowOfFour.every((index) => array[index] === decidedCandy) &&
        !isBlank
      ) {
        dragFlag && dispatch(updateScore(4));
        rowOfFour.forEach((index) => (array[index] = blank));
        dragFlag && decidedCandy === bluecandy && dispatch(decreaseCandies(4));
        fourRowMatch = true;
      }
    }
    return fourRowMatch;
  };
  const checkForRowOfThree = (array) => {
    let threeRowMatch = false;
    const notValid = [
      8, 9, 18, 19, 28, 29, 38, 39, 48, 49, 58, 59, 68, 69, 78, 79, 88, 89, 98,
      99,
    ];

    for (let i = 0; i < 100; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedCandy = array[i];
      const isBlank = array[i] === blank;

      if (notValid.includes(i)) continue;

      if (
        rowOfThree.every((index) => array[index] === decidedCandy) &&
        !isBlank
      ) {
        dragFlag && dispatch(updateScore(3));
        rowOfThree.forEach((index) => (array[index] = blank));
        dragFlag && decidedCandy === bluecandy && dispatch(decreaseCandies(3));
        threeRowMatch = true;
      }
    }
    return threeRowMatch;
  };
  const checkForColumnOfThree = (array) => {
    let threeColMatch = false;
    for (let i = 0; i < 80; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedCandy = array[i];
      const isBlank = array[i] === blank;

      if (
        columnOfThree.every((index) => array[index] === decidedCandy) &&
        !isBlank
      ) {
        dragFlag && dispatch(updateScore(3));
        columnOfThree.forEach((index) => (array[index] = blank));
        dragFlag && decidedCandy === bluecandy && dispatch(decreaseCandies(3));
        threeColMatch = true;
      }
    }
    return threeColMatch;
  };
  const moveIntoSquareBelow = () => {
    for (let i = 0; i < 100 - width; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && currentCandyArrangement[i] === blank) {
        fillNewCandies(i);
      }
      if (currentCandyArrangement[i + width] === blank) {
        currentCandyArrangement[i + width] = currentCandyArrangement[i];
        currentCandyArrangement[i] = blank; // moving blank squares to top
      }
    }
  };

  const fillNewCandies = (index) => {
    let randomNumber = Math.floor(Math.random() * candyColors.length);
    currentCandyArrangement[index] = candyColors[randomNumber];
  };
  useEffect(() => {
    const timer = setInterval(() => {
      checkForColumnOfFive(currentCandyArrangement);
      checkForRowOfFive(currentCandyArrangement);
      checkForColumnOfFour(currentCandyArrangement);
      checkForRowOfFour(currentCandyArrangement);
      checkForColumnOfThree(currentCandyArrangement);
      checkForRowOfThree(currentCandyArrangement);
      moveIntoSquareBelow();
      setCurrentCandyArrangement([...currentCandyArrangement]);
    }, 100);

    return () => clearInterval(timer);
  }, [currentCandyArrangement]);

  const createBoard = () => {
    const randomCandyArrangement = [];

    for (let i = 0; i < width * width; i++) {
      const randomCandy = Math.floor(Math.random() * candyColors.length);
      randomCandyArrangement.push(candyColors[randomCandy]);
    }
    setCurrentCandyArrangement([...randomCandyArrangement]);
  };
  const dragStart = (e) => {
    setSquareBeingDragged(e.target);
  };
  const dragDrop = (e) => {
    setSquareBeingReplaced(e.target);
  };
  const dragEnd = (e) => {
    // replacing logic
    const squareBeingDraggedId = parseInt(
      squareBeingDragged.getAttribute("data-id")
    );
    const squareBeingReplacedId = parseInt(
      squareBeingReplaced.getAttribute("data-id")
    );

    let dummyArr = [...currentCandyArrangement];
    let swap = dummyArr[squareBeingReplacedId];
    dummyArr[squareBeingReplacedId] = dummyArr[squareBeingDraggedId];
    dummyArr[squareBeingDraggedId] = swap;

    // Logic of valid movement
    const validMoves = [
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width,
      squareBeingDraggedId - 1,
    ];

    const isMoveValid = validMoves.includes(squareBeingReplacedId);
    const isAColumnOfFive = isMoveValid && checkForColumnOfFive(dummyArr);
    const isARowOfFive = isMoveValid && checkForRowOfFive(dummyArr);
    const isAColumnOfFour = isMoveValid && checkForColumnOfFour(dummyArr);
    const isARowOfFour = isMoveValid && checkForRowOfFour(dummyArr);
    const isAColumnOfThree = isMoveValid && checkForColumnOfThree(dummyArr);
    const isARowOfThree = isMoveValid && checkForRowOfThree(dummyArr);

    if (
      isMoveValid &&
      (isAColumnOfFive ||
        isARowOfFive ||
        isAColumnOfFour ||
        isARowOfFour ||
        isAColumnOfThree ||
        isARowOfThree)
    ) {
      // Move is valid
      setDragFlag(true);
      currentCandyArrangement[squareBeingReplacedId] =
        squareBeingDragged.getAttribute("src");
      currentCandyArrangement[squareBeingDraggedId] =
        squareBeingReplaced.getAttribute("src");
      setCurrentCandyArrangement([...currentCandyArrangement]);
      setSquareBeingDragged(null);
      setSquareBeingReplaced(null);
      dispatch(decreaseMoves());
    } else {
      setDragFlag(false);
      setCurrentCandyArrangement([...currentCandyArrangement]);
    }
  };

  return (
    <div className="game">
      {currentCandyArrangement.map((candy, index) => (
        <img
          key={index}
          src={candy}
          alt="candy"
          data-id={index}
          draggable={true}
          onDragStart={dragStart}
          onDrop={dragDrop}
          onDragEnd={dragEnd}
          onDragOver={(e) => e.preventDefault()}
        />
      ))}
    </div>
  );
}
export default Game1;
