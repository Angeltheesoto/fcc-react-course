

export default function Challenge() {
 // challenge 1: Square each number.
 const nums = [1, 2, 3, 4, 5];
 let Arr = []
 let squared = nums.map((num) => {
  let multiply = num * num;
  Arr.push (multiply)
 })

 // challenge 2: Capitalize the first letter of each name.
 const names = ["alice", "bob", "charlie", "danielle"]
 const Arr2 = []
 names.map((name) => {
  let caps = name[0].toUpperCase() + name.slice(1);
  Arr2.push(caps)
 })

 // Challlenge 3: Add a <p> tag to each pokemon.
const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
const Arr3 = []
pokemon.map((mon) => {
 let pTag = `<p>${mon}</p>`;
 Arr3.push(pTag)
}) 

// Challenge 4: Change the elements of the array.
const colors = [
 <h3>Red</h3>, 
 <h3>Orange</h3>, 
 <h3>Yellow</h3>, 
 <h3>Green</h3>, 
 <h3>Blue</h3>, 
 <h3>Indigo</h3>, 
 <h3>Violet</h3>]

 return (
  <>
   {console.log(Arr)}
   {console.log(Arr2)}
   {console.log(Arr3)}
   <div>
    {colors}
   </div>
  </>
  )
 }

