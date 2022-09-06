import react, { useState, useEffect, useRef } from 'react'
// import memesData from "./memesData"

export default function Meme() {

  // const [ memeImage, setMemeImage ] = useState('')
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })

  const [allMemeImages, setAllMemeImages] = useState({});

  useEffect(() => {
    console.log("Effect ran")
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json())
      .then(data => setAllMemeImages(data.data.memes))
  }, [])

 function handleClick() {
   const randomNumber = Math.floor(Math.random() * allMemeImages.length)
   const url = allMemeImages[randomNumber].url;
   setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
   }))
  }

  function handleChange(event) {
    const {name, value, type, checked} = event.target
    setMeme(prevMeme => {
      return {
        ...prevMeme,
        [name]: type === 'checkbox' ? checked : value
      }
    })
  }
  console.log(meme)

  // const ref = useRef(null)
  // useEffect(() => {
  //   ref.current.click();
  // })
  
 return (
  <main >
   <div className="form">
    <div className="label-container" >
     <label>Top</label>
     <label>Bottom</label>
    </div>
    <div className="input-container">
    <input 
      type="text" 
      name="topText" 
      value={meme.topText}
      className="top" 
      placeholder="Shut up" 
      onChange={handleChange} 
    />

    <input 
      type="text" 
      name="bottomText" 
      value={meme.bottomText}
      placeholder="and take my money" 
      onChange={handleChange}
    />
      
    </div>

    <button type="button" onClick={handleClick} >Get a new meme image</button>

    <div className='meme-img-container'>
      <div className='meme-container'>
        <img src={meme.randomImage} />
        <h2 className='meme--text top'>{meme.topText}</h2>
        <h2 className='meme--text bottom'>{meme.bottomText}</h2>
      </div>
    </div>
   </div>
  </main>
 )
}