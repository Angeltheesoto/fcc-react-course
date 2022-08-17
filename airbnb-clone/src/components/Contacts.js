// import MainImage from '../images/man_smoke.jpg'
import Envelope from '../images/envelope.svg'

export default function Contacts({img, name, phone, email}) {
 return (
  <div className='contacts'>
   <div className='contact-card'>
    <img src={img} />
    <h3>{name}</h3>
   </div>
   
   <div className="info-group">
    {/* <img src={} /> */}
    <p>{phone}</p>
   </div>

   <div className="info-group">
    <img src={Envelope} />
    <p>{email}</p>
   </div>
  </div>
 )
}