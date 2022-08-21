import React from 'react'

export default function Testing() {

 // const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
 // let thingsElement = things.map( item => <p key={item}> {item} </p> ) 
 // function addThings() {
 //  const addedThing = `Thing ${things.length + 1}`
 //  setThings(prevState => [...prevState, addedThing])
 // }

 const date = new Date();
 const hours = date.getHours();
 const name = 'Angel'

 let timeOfDay;
   if(hours >= 4 && hours < 12){
    timeOfDay = 'morning'
   } else if(hours >= 12 && hours < 17){
    timeOfDay = 'afternoon'
   } else if(hours >= 17 && hours < 20){
    timeOfDay = 'evening'
   } else {
    timeOfDay = 'night'
   }

   let sentence = `Good ${timeOfDay}, ${name}`;


 return (
  <div>
   {/* <button onClick={addThings}>Add Item</button>
   {thingsElement} */}

   {sentence}
  </div>
 )
}