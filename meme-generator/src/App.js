
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";
import testBoxes from "./components/testBoxes";
import Testing from "./components/testing";
import Box from "./components/testBox";

function App() {

  // const [squares, setSquares] = useState(testBoxes)
  // function toggle(id) {
  //   setSquares(prevSquares => {
  //     const newSquares = []
  //     for(let i = 0; i < prevSquares.length; i++){
  //       const currentSquare = prevSquares[i]
  //       if(currentSquare.id === id) {
  //         const updatedSquare = {
  //           ...currentSquare,
  //           on: !currentSquare.on
  //         }
  //         newSquares.push(updatedSquare)
  //       } else {
  //         newSquares.push(currentSquare)
  //       }
  //     }
  //     return newSquares
  //   })
  // }
  // const squareElements = squares.map(square => (
  //   <Box
  //     key={square.id}
  //     id={square.id}
  //     on={square.on}
  //     handleClick={toggle}
  //   />
  // ))

  // fetch data from api _________-
  // const [starWarsData, setStarWarsData] = useState({})
  // const [count, setCount] = useState(1)
  // console.log("Component rendered")
  // // side effects - interact with systems outside of react
  // useEffect(() => {
  //   console.log("Effect ran")
  //   fetch(`https://swapi.dev/api/people/${count}`)
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  // }, [count]) // dependencies array


  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Meme />  

      <Testing />
      {/* {squareElements} */}

      {/* fetch data from api */}
      {/* <h1>The count is {count}</h1>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next count</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre> */}


      </div>
    </div>
  );
}

export default App;
