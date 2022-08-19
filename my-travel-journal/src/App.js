import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Cards from './components/Cards';
import Data from './components/data'

function App(props) {

  const DynamicCards = Data.map((item) => {
    return (
      <Cards 
        key={item.id}
        item={item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {DynamicCards}
      {/* <Cards /> */}
    </div>
  );
}

export default App;
