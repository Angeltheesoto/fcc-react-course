
function Main(props) {
  return (
    <div className="main-container" 
      style={{
        backgroundColor: props.colorSwitch ? '' : 'white'
      }}
    >
    <h3 id={props.colorSwitch ? 'white' : 'black'}>
      Fun facts about React
    </h3>
    <ul id={props.colorSwitch ? 'white' : 'black'}>
      <li>Was first released in 2013</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100k stars on GitHub</li>
      <li>Is maintained by Facebook</li>
      <li>Powers thousands of enterprise apps including mobile apps</li>
    </ul>
    </div>
  ) 
}

export default Main