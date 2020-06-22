import React from 'react';
import logo from './logo.svg';
import './App.css';
import VisionApi from './components/visionApi.js'

class App extends React.Component {

  render(){
  return (
    <div className="App">
      <VisionApi/>
    </div>
  );
}
}

export default App;
