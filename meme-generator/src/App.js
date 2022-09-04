
import { useState } from "react";
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

  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Meme />  

      <Testing />
      {/* {squareElements} */}
      </div>
    </div>
  );
}

export default App;
