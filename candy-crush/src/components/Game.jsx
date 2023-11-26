import React from 'react'

function Game() {
    const width=10;
    const candyColors = [blue,green, orange, purple, red,yellow];
    const createBoard=()=>{
       
        const candyArrangement = [];
        for(let i =0; i <width *width;i++ ){
            const randomNumberfrom0to5= Math.floor(Math.random() * candyColors.length)
            const randomColor=candyColors[randomNumberfrom0to5];
            candyArrangement.push(randomColor);
        }
        console.log(candyArrangement)
    }
    createBoard();
  return (
    <div>
      
    </div>
  )
}

export default Game
