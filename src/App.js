import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const heroes = ["Phil Greenberg","Juraj Husár","David Leong","Davor Badrov","Sebastian Kalinowski"]
  const countSite = [150, 100, 80, 70, 50];
  return (
    <div className="App">
      <header className="App-header">
      <Sitecounter></Sitecounter>
      <Hero name = {heroes[0]} site = {countSite[0]}></Hero>
      <Hero name = {heroes[1]} site = {countSite[1]}></Hero>
      <Hero name = {heroes[2]} site = {countSite[2]}></Hero>
      <Hero name = {heroes[3]} site = {countSite[3]}></Hero>
      <Hero name = {heroes[4]} site = {countSite[4]}></Hero>
      
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
