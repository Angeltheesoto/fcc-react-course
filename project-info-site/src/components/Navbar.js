import logo2 from '../images/react-icon.png'

function Navbar() {
  return (
   <div className="navbar-container">
    <div className='bgimg-container'>
     <img src={logo2} width='50rem' className='background-logo' />
    </div>
    <div className='title-container'>
     <img src={logo2} width='50rem' />
     <h1>ReactFacts</h1>
    </div>
    <h2>React Course - Project 1</h2>
   </div>
  )
}

export default Navbar