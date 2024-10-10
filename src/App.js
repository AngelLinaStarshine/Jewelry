import './App.css';
import Jewelries from './Components/JewelriesComponents/Jewelries';
import AllCollections from './Components/Filters/AllCollections';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <div className="App">

      <div className='block_one'>
      <AllCollections/>
      </div>  
      <div className='block'>
      <Jewelries/>
      </div> 
      <div className='block_one'>
      <Cart/>
      </div> 
    
      
    </div>
  );
}

export default App;
