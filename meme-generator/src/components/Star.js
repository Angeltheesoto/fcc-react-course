

export default function Star(props) {
 
 const starIcon = props.isFilled ? '⭐' : '✩';

 // function toggleFavorite() {
 //    props.handleClick(prevContact => {
 //      return {
 //        ...prevContact,
 //        isFavorite: !prevContact.isFavorite
 //      }
 //    })
 // }

 return (
  <span style={{'fontSize': '2rem', 'cursor': 'pointer'}} onClick={props.handleClick}>
   {starIcon}
  </span> 
 )
}