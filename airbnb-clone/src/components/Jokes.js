

export default function Jokes(props) {
 return (
  <div className='jokes-container'>
   {props.setup && <h3>Setup: {props.setup}</h3>}
   <p>Punchline: {props.punchline}</p>
   <hr />
   {/* <p>{props.joke}</p>
   <p>Upvotes: {props.upvotes}</p>
   <p>Downvotes: {props.downvotes}</p>
   <p>Comments: {props.comments[0].one} {props.comments[1].three}</p> */}
  </div>
 )
}