import Newimage from '../images/man_smoke.jpg'

export default function Cards(props) {
 return (
  <div className='card'>
   <div className='card--stats'>
   <img src={Newimage} className='card--image' />
   <span src="#">5.0</span>
   <span className='gray'>(6) .</span>
   <span className='gray'>USA</span>
   </div>
   <p>Life Lessons with Katie Zaferes</p>
   <p><span className='bold'>From $136</span> / person</p>
  </div>
 )
}