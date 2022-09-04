import { useState } from "react";

export default function Box(props) {
 
 // const [on, setOn] = useState(props.on)

 let styles = {
  backgroundColor: props.on ? '#1e1e1e' : 'transparent'
  // backgroundColor: on ? '#1e1e1e' : 'transparent'
 }

 // function toggle() {
 //  setOn(prevOn => !prevOn)
 // }

 return(
  <div style={styles} className='box' onClick={() => props.handleClick(props.id)}></div>
  // <div style={styles} className='box' onClick={toggle}></div>
 )
}