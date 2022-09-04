import { useState } from 'react'

export default function Jokes(props) {

 const [isShown, setIsShown] = useState(false);
 function toggle() {
  setIsShown((prevIsShown) => !prevIsShown )
  console.log(isShown)
 }


 return (
  <div className='jokes-container'>

   {props.setup && <h3>Setup: {props.setup}</h3>}
   {isShown && <p className='punchline'>Punchline: {props.punchline}</p>}
   <button className='toggle' onClick={toggle}>{isShown ? 'Hide' : 'Show'} punchline</button>

   <hr />
   {/* <p>{props.joke}</p>
   <p>Upvotes: {props.upvotes}</p>
   <p>Downvotes: {props.downvotes}</p>
   <p>Comments: {props.comments[0].one} {props.comments[1].three}</p> */}
  </div>
 )
}