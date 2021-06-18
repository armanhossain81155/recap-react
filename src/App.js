import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const heroes = [{name : 'Phil Greenberg', countSite: 150},{name : 'Juraj Husár', countSite : 100},{name : 'David Leong', countSite : 80 },{name : 'Davor Badrov', countSite : 70},{name : 'Sebastian Kalinowski', countSite : 50}]
  
  return (
    <div className="App">
      <header className="App-header">
        
      <Sitecounter></Sitecounter>
          {
              heroes.map(hero => <Hero name = {hero.name} site = {hero.countSite}></Hero>)
            }
            
      
      </header>
    </div>
  );
}
function Sitecounter(){
  let [count , setCount] = useState(0);
 const increaseHandle = () => setCount( count + 1);
 const decreaseHAndle = () => setCount( count - 1);

  return (
      <div>
        <h3>Count a number : {count} </h3>
      <button onClick = {increaseHandle}>Increase Button</button>
      <button onClick = {decreaseHAndle}>Decrease Button</button>
    
      </div>
  )
}
function Hero(props){
 
  const heroStyle = {
    border : '3px solid gold',
    margin : '20px',
    width : '600px',
    color : 'orange'
  }
  const heroName = {
    color : 'blue'
    
  }

  return (
   
      <div style= {heroStyle}>
        <h2>I am React Hero-  <span style = {heroName}> {props.name} </span> </h2>
        <h4>I make {props.site} Website using react library</h4>
      </div>
  )
}


export default App;
