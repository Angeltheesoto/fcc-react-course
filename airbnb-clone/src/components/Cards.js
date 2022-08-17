// Section 1.0


export default function Cards(props) {
 // console.log(props)
 return (
  <div className='card'>
   <div className='card--stats'>
   <img src={props.img} className='card--image' />
   <span>{props.rating}</span>
   <span className='gray'>{props.reviewCount} • </span>
   <span className='gray'>{props.country}</span>
   </div>
   <p>{props.title}</p>
   <p><span className='bold'>From ${props.price}</span> / person</p>
  </div>
 )
}