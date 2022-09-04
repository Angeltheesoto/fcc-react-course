import React, { useState } from 'react'
import Count from "./Count"
import Star from './Star'
import TestHeader from './TestHeader'
import TestBody from './TestBody'
import testBoxes from './testBoxes'
import Box from './testBox'

export default function Testing(props) {

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
  // const [count, setCount] = useState(0)
  // function add() {setCount(prevCount => prevCount + 1)}
  // function subtract() {setCount(prevCount => prevCount - 1)}


  // const [ isGoingOut, setIsGoingOut ] = useState(true)
  // const yesNo = () => {
  //   // isGoingOut === 'Yes' ? setIsGoingOut(event => event = 'No') : setIsGoingOut(event => event = 'Yes');
  //   setIsGoingOut(prevState => !prevState)
  // }
// CUT OFF = GOING INVERSE

// const [contact, setContact] = useState({
//   firstName: "John",
//   lastName: "Doe",
//   phone: '+1 (719) 555-1212',
//   email: "itsmyrealname@example.com",
//   isFavorite: false
// })
// let starIcon = contact.isFavorite ? '⭐' : '✩';
  // function toggleFavorite() {
  //   setContact(prevContact => {
  //     return {
  //       ...prevContact,
  //       isFavorite: !prevContact.isFavorite
  //     }
  //   })
  // }

//  const [user, setUser] = useState('Angel')
  // const [box, setBox] = useState(testBoxes);
  // let boxes = box.map( (e) => (
  //   <Box key={props.on} on={e.on}/>
  // )) 

  // const [messages, setMessages] = useState(['a', 'b'])
  // What is CONDITIONAL RENDERING? What is displayed on the page based on a condition.
  // When to use &&? When you want something to show or not show

  // const [formData, setFormData] = useState(
  //   {
  //     firstName: '', 
  //     lastName: '', 
  //     email: '', 
  //     comments: '',
  //     isFriendly: true,
  //     employment: ''
  //   }
  // )
  // // console.log(formData.favColor)
  // function handleChange(event) {
  //   const {name, value, type, checked} = event.target
  //   setFormData(prevFormData => {
  //     return {
  //       ...prevFormData,
  //       [name]: type === 'checkbox' ? checked : value
  //     }
  //   })
  // }
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   // submitToApi(formData)
  //   console.log(formData)
  // }

  // const [signUp, setSignUp] = useState({
  //   email: '',
  //   password: '',
  //   confirmPassword: '',
  //   newsletter: ''
  // })
  // console.log(signUp)
  // function handleChange(event) {
  //   const {name, value, type, checked} = event.target
  //   setSignUp(prevSignUp => {
  //     return {
  //       ...prevSignUp,
  //       [name]: type === 'checkbox' ? checked : value
  //     }
  //   })
  // }
  // function handleSubmit(event) {
  //   event.preventDefault()
  //   if (signUp.password === signUp.confirmPassword){
  //     console.log('Successfully signed up')
  //   } else {
  //     console.log('passwords do not match')
  //   }
  //   if(signUp.newsletter) {
  //     console.log(`Thanks for signing up for our newsletter!`)
  //   }
  // }

	// ⭐✩
  return (
  <div>
    <br/>

    {/* <form onSubmit={handleSubmit}> 
    <h1>Join Today</h1>
    <br/>
      <input
        type='email'
        name='email'
        placeholder='Email address'
        onChange={handleChange}
        value={signUp.email}
      />
      <br/><br/>
      <input
        type='password'
        name='password'
        placeholder='Password'
        onChange={handleChange}
        value={signUp.password}
      />
      <br/><br/>
      <input
        type='password'
        name='confirmPassword'
        placeholder='Confirm password'
        onChange={handleChange}
        value={signUp.confirmPassword}
      />
      <br/><br/>
      <input
        type='checkbox'
        name='newsletter'
        id='newsletter'
        onChange={handleChange}
        checked={signUp.newsletter}
      />
      <label htmlFor='newsletter'> I want to join the newsletter</label>
      <br/><br/>
      <button>Sign Up</button>
    </form> */}

  {/* <form onSubmit={handleSubmit}>
    <input 
      type="text"
      placeholder="First Name"
      onChange={handleChange}
      name="firstName"
      value={formData.firstName}
    /><br /><br/>
    <input 
      type="text"
      placeholder="Last Name"
      onChange={handleChange}
      name="lastName"
      value={formData.lastName}
    /><br /><br/>
    <input 
      type="email"
      placeholder="Email"
      onChange={handleChange}
      name="email"
      value={formData.email}
    /><br /><br />
    <textarea 
      value={formData.comments} 
      placeholder='Type here..'
      onChange={handleChange}
      name='comments'
    />
    <br /><br />
    <input 
      type="checkbox" 
      id='isFriendly' 
      checked={formData.isFriendly}
      onChange={handleChange}
      name='isFriendly'
    />
    <label htmlFor='isFriendly'> Are you friendly?</label>
    <br/> <br/>
    <fieldset>
      <legend>Current employment status</legend>
      <input
        type="radio"
        id="unemployment"
        name="employment"
        value="unemployment"
        onChange={handleChange}
      />
      <label htmlFor='unemployment'>Unemployment</label>
      <br/>
      <input
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        onChange={handleChange}
      />
      <label htmlFor='part-time'>Part-time</label>
      <br/>
      <input
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        onChange={handleChange}
      />
      <label htmlFor='full-time'>Full-time</label>
    </fieldset>
    <br/>

    <label htmlFor='favColor'>What is your favorite color?</label>
    <br/>
    <select 
      id='favColor'
      value={formData.favColor}
      onChange={handleChange}
      name="favColor"
    >
      <option value=''>-- Choose --</option>
      <option value='red'>Red</option>
      <option value='orange'>Orange</option>
      <option value='yellow'>Yellow</option>
      <option  value='green'>Green</option>
      <option value='blue'>Blue</option>
      <option value='indigo'>Indigo</option>
      <option value='violet'>Violet</option>
    </select>

    <button>Submit</button>
  </form> */}

  {/* <h1>
    {
      messages.length === 0 ?
      <h1>You're all caught up!</h1> :
      <h1>You have {messages.length} unread {messages.length > 1 ? 'messages' : 'message'}</h1>
    }
  </h1> */}

    {/* <h1>Boxes will go here</h1>
    <div>{boxes}</div> */}

    {/* <TestHeader user={user} />
    <TestBody user={user} /> */}

    {/* <div> */}
      {/* <span
        style={{'fontSize': '2rem', 'cursor': 'pointer'}}
        onClick={toggleFavorite}
      >{starIcon}</span> */}
      {/* <Star isFilled={contact.isFavorite} handleClick={toggleFavorite} />
      <h2>
        {contact.firstName} {contact.lastName}
      </h2>
      <p>{contact.phone}</p>
      <p>{contact.email}</p>
    </div> */}

{/* // CUT OFF = GOING INVERSE */}

   {/* <button onClick={addItem}>Add Item</button>
   {thingsElement} */}

   {/* {sentence} */}

   {/* <h1>Is state important to know?</h1>
   <div>
    <h1 style={{'color': 'white','background-color': 'green', 'width': 'fit-content', 'padding': '1rem', 'border-radius': '50%'}} onClick={handleClick}>{isImportant}</h1>
   </div> */}

   {/* <div className='number-container'>
    <Count number={count} />
    <div className='minus' onClick={subtract}>
      <span>
        -
      </span>
    </div>
    <div className='plus' onClick={add}>
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