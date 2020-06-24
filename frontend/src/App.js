import React from 'react';
import logo from './logo.svg';
import './App.css';
import VisionApi from './components/visionApi.js'
import Upload from './components/upload.js'

class App extends React.Component {

  render(){
  return (
    <div className="App">
      Welcome to recorder app
      <VisionApi/>
    </div>
  );
}
}

export default App;
