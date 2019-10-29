import React from 'react';
import './App.css';
import Rectangle from './components/rectangle';
import Block from './components/block';
import Clicker from './components/clicker';

function App() {
  return (
      <div className="App">
          <Rectangle/>
          <Block backColor="purple" borderColor="black"/>
          <Block backColor="black" borderColor="white"/>
          <Block backColor="red" borderColor="purple"/>
          <Clicker/>
      </div>
  );
}

export default App;