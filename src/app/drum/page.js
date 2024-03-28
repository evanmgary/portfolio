"use client"
import { DrumPanel } from "./components";
import './drum.css'
import { useState, useEffect } from "react";

export default function Page(){
      
  const [recentSound, setRecentSound] = useState("");
  
  function playSound(soundId, soundName){
    
    

   // console.log(`Playing ${soundName}`)
    setRecentSound(soundName);
    document.getElementById(soundId).play();
    
  } 
  
  function keyPress(event){
    console.log("running" + event.key)
    
    const key = event.key.toUpperCase();
    if (key.match(/[QWEASDZXC]/)){
      document.getElementById(key).click();
    }
    
  } 
  
    
  
  useEffect(() => {
    window.addEventListener("keydown", keyPress, false)
    return () => {
      window.removeEventListener("keydown", keyPress, false)
    }
  }
    
    
    ,[]
  )
  
  
   
  return(
    <div>
      <input type="hidden" onKeyDown={keyPress}/>
      <DrumPanel playSound={playSound}/>
      <div id="display">{recentSound}</div>
      <h2 className="credit">By Evan Gary for FreeCodeCamp Front End Curriculum</h2>
      <h2 className="credit">Sounds supplied by FreeCodeCamp on the project page</h2>
     
    </div>
  )
}