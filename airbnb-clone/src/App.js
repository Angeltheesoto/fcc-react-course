//  airbnb clone
// import Navbar from "./components/Navbar";
// import Hero from './components/Hero';
// import Cards from './components/Cards'

import Contacts from "./components/Contacts";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      {/* airbnb clone */}
      {/* <Navbar />
      <Hero />
      <Cards /> */}

      <Contacts
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
        />
    </div>
  );
}

export default App;
