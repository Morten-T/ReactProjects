import logo from './logo.svg';
// import sailboat from './sailboat.png';
import './App.css';
import { useEffect } from 'react';

function App() {

  // get notified whenever the window is resized ( find guiden fra forrige lektion, den med Greg)
  // window.addEventListener('resize', () => {
  //   console.log(window.innerWidth);
  //   console.log(window.innerHeight);
  // });

  // make event handler for when window is resized

  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <div className='yellow-box'>
        <h1 className='title'>Webpage to calculate hull speed</h1>
        <img src="/sailboat.jpg" alt='sailboat' style={{ width: '12vw', height: '50vh' }} />
        {/* Måske lav det om så man bruger en resize listener, og useEffect til at lave om på størrelsen af billedet */}
      </div>
    </div>
  );
}

export default App;
