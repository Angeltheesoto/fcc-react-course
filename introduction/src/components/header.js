
import Logo from '../images/React-icon.svg.png';

function Header() {
 return (
  <header>
    <img src={Logo} alt="React logo" className='logo'/>
   <nav>
    <ul className='nav'>
     <a href='#'><li>Pricing</li></a>
     <a href='#'><li>About</li></a>
     <a href='#'><li>Contact</li></a>
    </ul>
   </nav>
  </header>
 )
}

export default Header