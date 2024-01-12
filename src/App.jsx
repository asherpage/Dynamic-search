import './App.css';
import Searchbar from './components/Searchbar';
import image from './images/photo-1477346611705-65d1883cee1e.png'
function App() {
  const data = [1,2,3,4,5,6,7,8,9,10]
  return (

        <div className="app-container">
      <div className="hero-section">
         <Searchbar />
        <img
          src={image}
          alt="Hero Section"
          className="hero-image"
        />
      </div>
      <div className="content">
        
        <div className='container'>
          <div className='circle-divs'></div>
          <div className='circle-divs'></div>
        
        </div>
      </div>
    </div>
  );
}

export default App;