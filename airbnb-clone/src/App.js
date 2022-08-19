//  Section 1.0
// Components
import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
// import Challenge from "./components/Challenge";
import Card from './components/Cards'
import Data from "./components/data";
console.log(typeof(Data))

// images
// import Newimage from './images/man_smoke.jpg'

// Section 1.1
// import Contacts from "./components/Contacts";
// import Jokes from "./components/Jokes";
// import JokesData from "./components/JokesData";


function App(props) {
  // Section 1.1
  // console.log(JokesData)
  // const jokeElements = JokesData.map((joke) => {
  //   return <Jokes 
  //     setup={joke.setup}
  //     punchline={joke.punchline}
  //   />
  // })

  // Section 1.0
  const Cards = Data.map( (item) => {
    return (
      <Card
        key={item.id}
        item={item}
        // or use the spread operator = {...item} : then you would have to remove item from the framwork in Cards.js
        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // country={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    )
  })

  return (
    <div className="App">
      {/* section 1.0 */}
      <Navbar />
      <Hero />
      <div className='cardsContainer'>
        {Cards}
      </div>

      {/* challenge section */}
      {/* <Challenge /> */}

      {/* Section 1.1 */}
      {/* {jokeElements} */}
      {/* <Contacts
        img='https://th.bing.com/th/id/R.db197cadf38d4731649560829d74ec6f?rik=DtbsnmFTCVXF%2fA&riu=http%3a%2f%2fnews.uoguelph.ca%2fwp-content%2fuploads%2f2016%2f11%2fcat-e1478099247797.jpg&ehk=%2fvNUN2OBPxT57U6L9lyg2msIa4HItQwIEW%2btGQKw2Zs%3d&risl=&pid=ImgRaw&r=0'
        name="Mr. Whislerson"
        phone="(212) 555-1234"
        email="mr.whiskaz@catnap.meow"
      />
      <Contacts
        img='https://th.bing.com/th/id/R.db197cadf38d4731649560829d74ec6f?rik=DtbsnmFTCVXF%2fA&riu=http%3a%2f%2fnews.uoguelph.ca%2fwp-content%2fuploads%2f2016%2f11%2fcat-e1478099247797.jpg&ehk=%2fvNUN2OBPxT57U6L9lyg2msIa4HItQwIEW%2btGQKw2Zs%3d&risl=&pid=ImgRaw&r=0'
        name="Fluffykins"
        phone="(212) 555-2345"
        email="fluff@me.com"
      />
      <Contacts
        img='https://th.bing.com/th/id/R.db197cadf38d4731649560829d74ec6f?rik=DtbsnmFTCVXF%2fA&riu=http%3a%2f%2fnews.uoguelph.ca%2fwp-content%2fuploads%2f2016%2f11%2fcat-e1478099247797.jpg&ehk=%2fvNUN2OBPxT57U6L9lyg2msIa4HItQwIEW%2btGQKw2Zs%3d&risl=&pid=ImgRaw&r=0'
        name="Felix"
        phone="(212) 555-4567"
        email="thecat@hotmail.com"
      />
      <Contacts
        img='https://th.bing.com/th/id/R.db197cadf38d4731649560829d74ec6f?rik=DtbsnmFTCVXF%2fA&riu=http%3a%2f%2fnews.uoguelph.ca%2fwp-content%2fuploads%2f2016%2f11%2fcat-e1478099247797.jpg&ehk=%2fvNUN2OBPxT57U6L9lyg2msIa4HItQwIEW%2btGQKw2Zs%3d&risl=&pid=ImgRaw&r=0'
        name="Pumpkin"
        phone="(212) 555-8342"
        email="pumps@gmail.com"
      />
        <Jokes 
        joke='Joke One' 
        setup='Setup One' 
        upvotes={3} 
        downvotes={2}
        comments={[{one: 'commentOne', two: 'commentTwo'}, {three: 'commentThree', four: 'commentFour'}]}
        pun={true}
        />
        <Jokes 
        joke='Joke Two' 
        setup='Setup Two' 
        upvotes={3} 
        downvotes={2}
        comments={[{one: 'commentOne', two: 'commentTwo'}, {three: 'commentThree', four: 'commentFour'}]}
        pun={false}
        />
        <Jokes 
        joke='Joke Three' 
        setup= 'Setup Three' 
        upvotes={3} 
        downvotes={2}
        comments={[{one: 'commentOne', two: 'commentTwo'}, {three: 'commentThree', four: 'commentFour'}]}
        pun={true}
        />
        <Jokes 
        joke='Joke Four' 
        setup='Setup Four' 
        upvotes={3} 
        downvotes={2}
        comments={[{one: 'commentOne', two: 'commentTwo'}, {three: 'commentThree', four: 'commentFour'}]}
        pun={false}
        /> */}

    </div>
  );
}

export default App;
