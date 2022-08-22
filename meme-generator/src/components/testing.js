import React, { useState } from 'react'

export default function Testing() {

//  const [things, setThings] = useState(["Thing 1", "Thing 2"])
 
//  function addThings() {
//    const addedThing = `Thing ${things.length + 1}`
//    setThings(prevState => [...prevState, addedThing])
//   }
  
//   let thingsElement = things.map( item => <p key={item}> {item} </p> ) 
  
//  const date = new Date();
//  const hours = date.getHours();
//  const name = 'Angel'
//  let timeOfDay;
//    if(hours >= 4 && hours < 12){
//     timeOfDay = 'morning'
//    } else if(hours >= 12 && hours < 17){
//     timeOfDay = 'afternoon'
//    } else if(hours >= 17 && hours < 20){
//     timeOfDay = 'evening'
//    } else {
//     timeOfDay = 'night'
//    }
//    let sentence = `Good ${timeOfDay}, ${name}`;

  // const [isImportant, setIsImportant] = useState('Yes');
  // function handleClick() {
  //   setIsImportant('no ')
  // }

  //  const [ number, setNumber ] = useState(0);
  // let equation = (event) => {
  //   // event.currentTarget.classList.contains('plus') ? setNumber(number + 1) : setNumber(number - 1)
  //   // ... pass a function instead of using state directly when changing a prev value of state ...
  //   event.currentTarget.classList.contains('plus') ? setNumber(prevNumber => prevNumber + 1) : setNumber(prevNumber => prevNumber - 1)
  // }

  // const [ isGoingOut, setIsGoingOut ] = useState(true)
  // const yesNo = () => {
  //   // isGoingOut === 'Yes' ? setIsGoingOut(event => event = 'No') : setIsGoingOut(event => event = 'Yes');
  //   setIsGoingOut(prevState => !prevState)
  // }
// CUT OFF = GOING INVERSE

const [contact, setContact] = useState({
  firstName: "John",
  lastName: "Doe",
  phone: '+1 (719) 555-1212',
  email: "itsmyrealname@example.com",
  isFavorite: false
})

let starIcon = contact.isFavorite ? '⭐' : '✩';

function toggleFavorite() {
  setContact(prevContact => {
    return {
      ...prevContact,
      isFavorite: !prevContact.isFavorite
    }
  })
}

	// ⭐✩
 return (
  <div>

    <span></span>
    <div>
      <span
        style={{'fontSize': '2rem', 'cursor': 'pointer'}}
        onClick={toggleFavorite}
      >{starIcon}</span>
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div>






{/* // CUT OFF = GOING INVERSE */}

   {/* <button onClick={addItem}>Add Item</button>
   {thingsElement} */}

   {/* {sentence} */}

   {/* <h1>Is state important to know?</h1>
   <div>
    <h1 style={{'color': 'white','background-color': 'green', 'width': 'fit-content', 'padding': '1rem', 'border-radius': '50%'}} onClick={handleClick}>{isImportant}</h1>
   </div> */}

   {/* <div className='number-container'>
    <span className='number'><p>{number}</p></span>
    <div className='minus' onClick={equation}>
      <span>
        -
      </span>
    </div>
    <div className='plus' onClick={equation}>
      <span>
        +
      </span>
    </div>
   </div> */}

   {/* <div className='going-out'>
    <h1>Do i feel like going out tonight?</h1>
    <h1 style={{'color': 'white','background-color': 'black', 'width': 'fit-content', 'padding': '1rem', 'border-radius': '50%', 'cursor': 'pointer'}} onClick={yesNo}>{isGoingOut ? 'yes' : 'no'}</h1>
   </div> */}

  </div>
 )
}