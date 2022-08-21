import memesData from "./memesData"

export default function Meme() {

 function handleClick() {
   const memesArray = memesData.data.memes
   const randomNumber = Math.floor(Math.random() * memesArray.length)
   const url = memesArray[randomNumber].url;
   console.log(url)
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
    {/* <div><img src={} /></div> */}
   </div>
  </main>
 )
}