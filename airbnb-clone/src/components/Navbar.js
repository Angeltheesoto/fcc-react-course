import airbnb from '../images/airbnb.png'

export default function Navbar() {
 return(
  <nav className="navbar">
    <img src={airbnb} />
    <h1 className='logo'>airbnb</h1>
  </nav>
 )
}