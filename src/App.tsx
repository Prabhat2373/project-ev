import React from 'react';
import TransMeter from './components/TransMeter';
import "./App.css"
import "./index.css"

function App() {

  return (
    <div className="main-container">
      <h1 className='main-heading text-lg text-black'>EV-Tron - ElecTro Meter</h1>
      <TransMeter />

    </div>
  );
}

export default App;
