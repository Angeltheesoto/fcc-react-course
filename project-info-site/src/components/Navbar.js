import logo2 from '../images/react-icon.png'

function Navbar(props) {

  return (
    <div className="navbar-container "
    style={{
      backgroundColor: props.colorSwitch ? '' : 'white'
    }}
    >
    <div className='bgimg-container'>
      <img src={logo2} width='50rem' className='background-logo' />
    </div>
    <div className='title-container'>
      <img src={logo2} width='50rem' />
      <h1>ReactFacts</h1>
    </div>
    <h2
    style={{
      color: props.colorSwitch ? '#eee' : 'black'
    }}
    >React Course - Project 1</h2>


    <div className='lightdark-container' >
      <p className='light-text text'
      style={{
        color: props.colorSwitch ? 'white' : 'grey'
      }}
      >Light</p>
      <div className='btn-container' onClick={props.toggledarkmode} style={{
        backgroundColor: props.colorSwitch ? 'white' : 'black'
      }}>
        <button type="button" className='light-button btn-circle'></button>
        <button type="button" className='dark-button btn-circle'></button>
      </div>
      <p className='dark-text text'
      style={{
        color: props.colorSwitch ? 'grey' : 'black'
      }}
      >Dark</p>
    </div>

    </div>
  )
}

export default Navbar