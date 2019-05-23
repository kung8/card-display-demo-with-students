import React from 'react';
import './App.css';
import data from './data'
import Nav from './Components/Nav';
import Display from './Components/Display'

function App() {
  // console.log(data)
  return (
    <div className="App">
     <Nav/>
     <Display data={data}/>
    </div>
  );
}

export default App;
