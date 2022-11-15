
import Product from './pages/Product';
import './stylesheet/App.css'
import './stylesheet/Products.css'
function App() {

  return (
    <div className="App h-auto md:h-[100vh]">
      {/*Can use Router in the future -> Create Pages folder for manage pages */}
      <Product/>
    </div>
  );
}

export default App;
