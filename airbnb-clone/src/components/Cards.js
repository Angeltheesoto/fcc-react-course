// Section 1.0
export default function Card(props) {
 console.log(props)
 let badgeText;
  if (props.item.openSpots === 0) {
   badgeText = 'SOLD OUT'
  } else if (props.item.location === "Online") {
   badgeText = "ONLINE"
  }

 return (

  <div className='card'>
   {badgeText && <div className="card--badge">{badgeText}</div>}
   <div className='card--stats'>
   <div className="overflowImg">
    <img src={props.item.coverImg} className='card--image' />
   </div>
   <span>⭐{props.item.stats.rating}</span>
   <span className='gray'> ({props.item.stats.reviewCount}) • </span>
   <span className='gray'>{props.item.location}</span>
   </div>
   <p>{props.item.title}</p>
   <p><span className='bold'>From ${props.item.price}</span> / person</p>
  </div>


  
  // <div className='card'>
  //  {badgeText && <div className="card--badge">{badgeText}</div>}
  //  <div className='card--stats'>
  //  <div className="overflowImg">
  //   <img src={props.img} className='card--image' />
  //  </div>
  //  <span>⭐{props.rating}</span>
  //  <span className='gray'> ({props.reviewCount}) • </span>
  //  <span className='gray'>{props.country}</span>
  //  </div>
  //  <p>{props.title}</p>
  //  <p><span className='bold'>From ${props.price}</span> / person</p>
  // </div>
 )
}