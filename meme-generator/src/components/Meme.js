import { useState } from 'react'
import memesData from "./memesData"

export default function Meme() {

  // const [ memeImage, setMemeImage ] = useState('')
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg'
  })
  const [allMemeImages, setAllMemeImages] = useState(memesData)

 function handleClick() {
   const memesArray = allMemeImages.data.memes
   const randomNumber = Math.floor(Math.random() * memesArray.length)
   const url = memesArray[randomNumber].url;
   setMeme(prevMeme => ({
    ...prevMeme,
    randomImage: url
   }))
  }


  
 return (
  <main >
   <div className="form">
    <div className="label-container" >
     <label>Top</label>
     <label>Bottom</label>
    </div>
    <div className="input-container">
     <input type="text" name="top" className="top" placeholder="Shut up" />
     <input type="text" name="bottom" placeholder="and take my money" />
    </div>
    <button type="button" onClick={handleClick}>Get a new meme image</button>
    <div className='meme-img-container'><img src={meme.randomImage} /></div>
   </div>
  </main>
 )
}