import { useState } from 'react';
import './App.css';
import Clock from './Clock/Clock'

function App() {
  const [showClock, setShowClock] = useState(true);
  const toggleClock = ()=>{
    setShowClock((showClock)=>{
      return !showClock
    })
  }
  return (
    <div className="App">
      {showClock ? <Clock /> : null}
      <button onClick={toggleClock}> Toggle</button>
    </div>
  );
}

export default App;
