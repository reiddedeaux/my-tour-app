import { useState } from 'react'
import Gallery from './components/Gallery'; 
import './styles/styles.css';

function App() {
  const [tours, setTours] = useState([]);
  const removeTour = (id) => {
    setTours((prevTours) => prevToursTours.filter((tour) => tour.id !== id)); 
  };

  return (
      <main>
        {/* App Title */}
        <h1>Tour Explorer</h1>
        {/* Tours */}

          <Gallery tours={tours} removeTour={removeTour} onRemove={removeTour}  />
      </main>
  );
}

export default App; 
