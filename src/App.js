import React from "react";
import './App.css';
import LiveOrDead from "./pages/LiveOrDead";

function App() {
  return (
    <div className="App" style={{ width: '100%', height: window.innerHeight }}>
      <LiveOrDead interval={500} />
    </div>
  );
}

export default App;
