import React from "react";
import "./App.css";
import Header from './components/header'; 
import Banner from './components/banner'; 
import CoreFeature from './components/core-feature'; 


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <CoreFeature/>
    </div>
  );
}

export default App;
