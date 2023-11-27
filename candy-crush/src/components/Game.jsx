import React, { useEffect, useState } from 'react'

function Game() {
    const[currentclrArrangement, setCurrentclrArrangement]= useState([]);
    const [squareBeingDragged, setSquareBeingDragged] = useState(null);
    const [squareBeingReplaced, setSquareBeingReplaced] = useState(null);
  const [dragFlag, setDragFlag] = useState(false);
  // const dispatch = useDispatch();
         
    const width=10;
    const candyColors = ['blueCandy', 'greenCandy', 'orangeCandy', 'purpleCandy', 'redCandy'];
    const createBoard=()=>{
       
        const candyArrangement = [];
        for(let i =0; i <width *width;i++ ){
            const randomNumberfrom0to5= Math.floor(Math.random() * candyColors.length)
            const randomColor=candyColors[randomNumberfrom0to5];
            candyArrangement.push(randomColor);
        }
        // console.log(candyArrangement);
        setCurrentclrArrangement(candyArrangement )
    }
    const checkForColumnOfThree = () => {
        let threeColMatch = false;
        for (let i = 0; i < 80; i++) {
          const columnOfThree = [i, i + width, i + width * 2];
          const decidedColor= currentclrArrangement[i];
          if (
            columnOfThree.every((index) => currentclrArrangement[index] === decidedColor))
           {
            // dragFlag && dispatch(updateScore(3));
            columnOfThree.forEach((index) => (currentclrArrangement[index] = ""));
            // dragFlag && decidedCandy === blueCandy && dispatch(decreaseCandies(3));
            threeColMatch = true;
          }
        }
        return threeColMatch;
      };
      const checkForRowOfThree = () => {
        let threeRowMatch = false;
        const notValid = [
          8, 9, 18, 19, 28, 29, 38, 39, 48, 49, 58, 59, 68, 69, 78, 79, 88, 89, 98,
          99,
        ];
        for (let i = 0; i < 100; i++) {
          const rowOfThree = [i, i + 1, i +2];
          const decidedColor= currentclrArrangement[i];
          if (notValid.includes(i)) continue;
          if (
            rowOfThree.every((index) => currentclrArrangement[index] === decidedColor))
           {
            // dragFlag && dispatch(updateScore(3));
            rowOfThree.forEach((index) => (currentclrArrangement[index] = ""));
            // dragFlag && decidedCandy === blueCandy && dispatch(decreaseCandies(3));
            threeRowMatch = true;
          }
        }
        return threeRowMatch;
      };
      const moveIntoSquareBelow = () => {
        for (let i = 0; i < 100 - width; i++) {
          const firstRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
          const isFirstRow = firstRow.includes(i);
    
          if (isFirstRow && currentclrArrangement[i] === "") {
            fillNewCandies(i);
          }
          if ((currentclrArrangement[i + width]) === "") {
            currentclrArrangement[i + width] = currentclrArrangement[i];
            currentclrArrangement[i] = ""; // moving blank squares to top
          }
        }
      };
      const fillNewCandies = (index) => {
        let randomNumber = Math.floor(Math.random() * candyColors.length);
        currentclrArrangement[index] = candyColors[randomNumber];
      };
      const dragStart =(e)=>{
        setSquareBeingDragged(e.target);
        console.log('drag start');
      }


      const dragDrop =(e)=>{
        setSquareBeingReplaced(e.target);
        console.log('drag drop');
      }


      const dragEnd =(e)=>{
       // replace the  logic
    const squareBeingDraggedId = parseInt(
      squareBeingDragged.getAttribute("data-id")
    );
    const squareBeingReplacedId = parseInt(
      squareBeingReplaced.getAttribute("data-id")
    );
    currentclrArrangement[squareBeingReplacedId]=squareBeingDragged.getAttribute("src");
    currentclrArrangement[squareBeingDraggedId]=   squareBeingReplaced.getAttribute("src");
    setCurrentclrArrangement([...currentclrArrangement]);
    setSquareBeingDragged(null);
    setSquareBeingReplaced(null);
    
    console.log('squareBeingDraggedId', squareBeingDraggedId);
    console.log('squareBeingReplacedId', squareBeingReplacedId);
    let dummyArr = [...currentclrArrangement];
    let swap = dummyArr[squareBeingReplacedId];
    dummyArr[squareBeingReplacedId] = dummyArr[squareBeingDraggedId];
    dummyArr[squareBeingDraggedId] = swap;

    const validMoves = [
      squareBeingDraggedId - width,
      squareBeingDraggedId + 1,
      squareBeingDraggedId + width,
      squareBeingDraggedId - 1,
    ]
    const isMoveValid = validMoves.includes(squareBeingReplacedId);
    const isAColumnOfFour = isMoveValid && checkForColumnOfFour(dummyArr);
    const isARowOfFour = isMoveValid && checkForRowOfFour(dummyArr);
    const isAColumnOfThree = isMoveValid && checkForColumnOfThree(dummyArr);
    const isARowOfThree = isMoveValid && checkForRowOfThree(dummyArr);
      }
      const checkForColumnOfFour = () => {
        let fourColMatch = false;
        for (let i = 0; i < 69; i++) {
          const columnOfFour = [i, i + width, i + width * 2, i+width *3];
          const decidedColor= currentclrArrangement[i];
          if (
            columnOfFour.every((index) => currentclrArrangement[index] === decidedColor))
           {
            // dragFlag && dispatch(updateScore(4));
            columnOfFour.forEach((index) => (currentclrArrangement[index] = ""));
            // dragFlag && decidedCandy === blueCandy && dispatch(decreaseCandies(4));
            fourColMatch = true;
          }
        }
        return fourColMatch;
      };
      const checkForRowOfFour = () => {
        let fourRowMatch = false;
        const notValid = [
          7, 8, 9, 17, 18, 19, 27, 28, 29, 37, 38, 39, 47, 48, 49, 57, 58, 59, 67,
          68, 69, 77, 78, 79, 87, 88, 89, 97, 98, 99,
        ];
        for (let i = 0; i < 100; i++) {
          const rowOfFour = [i, i + 1, i +2, i+3];
          const decidedColor= currentclrArrangement[i];
          if (notValid.includes(i)) continue;
          if (
            rowOfFour.every((index) => currentclrArrangement[index] === decidedColor))
           {
            // dragFlag && dispatch(updateScore(3));
            rowOfFour.forEach((index) => (currentclrArrangement[index] = ""));
            // dragFlag && decidedCandy === blueCandy && dispatch(decreaseCandies(3));
            fourRowMatch = true;
          }
        }
        return fourRowMatch;
      };
    useEffect(()=>{
        createBoard();
    
    },[])


    useEffect(()=>{
      const timer =  setInterval(()=>{
        checkForColumnOfFour()
        checkForRowOfFour()
        checkForColumnOfThree()
        checkForRowOfThree()
        moveIntoSquareBelow()
        
        setCurrentclrArrangement([...currentclrArrangement] )
        },100)
        return ()=>clearInterval(timer)
    },[ checkForColumnOfFour,checkForRowOfFour, checkForColumnOfThree,checkForRowOfThree, moveIntoSquareBelow, currentclrArrangement])
    console.log(currentclrArrangement);
  return (
    <div className='game'>
      {currentclrArrangement.map((candy, index) => (
        <img
          key={index}
          src={candy}
          style={{backgroundColor:candyColors}}
          alt={currentclrArrangement}
         data-id={index}
          draggable={true}
          onDragStart={dragStart}
          onDrop={dragDrop}
          onDragEnd={dragEnd}
         onDragOver={(e) => e.preventDefault()}
         onDragEnter={(e) => e.preventDefault()}
         onDragLeave={(e) => e.preventDefault()}
        />
      ))}
    </div>
  )
}

export default Game;
