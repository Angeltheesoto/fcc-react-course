
import Logo from '../images/React-icon.svg.png';

function Header() {
 return (
  <header>
   <nav>
    <img src={Logo} alt="React logo" width='50rem'/>
    <h1>Reasons I like React!</h1>
   </nav>
  </header>
 )
}

export default Header