"use client"
import { Clock, Settings, Controls } from "./components";
import "./clock.css"
import { useState, useEffect } from "react";

export default function Page(){
    const [timeLeft, setTimeLeft] = useState(1500);
    const [timerState, setTimerState] = useState("Session");
    const [breakLength, setBreakLength] = useState(5);
    const [sessionLength, setSessionLength] = useState(25);
    const [running, setRunning] = useState(false);
    const [timerVal, setTimerVal] = useState();
    
    function startStop(){
      if (!running){
        setTimerVal(setInterval(tick, 1000));
        setRunning(true);
      }
      else if (running){
        clearInterval(timerVal);
        setRunning(false);
      }
      
    }
    
    function tick(){
      setTimeLeft(prev => (prev - 1));
  
    }
    
    useEffect(
      () => {
        if (timeLeft <= 0){
          document.getElementById("beep").play();
          
          if (timerState == "Session"){
            setTimerState("Break");
            setTimeLeft(breakLength * 60);
          }
          if (timerState == "Break"){
            setTimerState("Session");
            setTimeLeft(sessionLength * 60);
          }
        }
      }
    
    , [timeLeft])
    
    useEffect(
      () => {
        if (timerState == "Session"){
          setTimeLeft(sessionLength * 60);
        }
    }
    ,[sessionLength])
    
    useEffect(
    () => {
      if (timerState == "Break"){
        setTimeLeft(breakLength * 60);
      }
    }
    
      
    ,[breakLength])
    
    function reset(){
      setTimeLeft(25 * 60);
      setRunning(false);
      setBreakLength(5);
      setSessionLength(25);
      clearInterval(timerVal);
      setTimerState("Session");
      document.getElementById("beep").pause();
      document.getElementById("beep").load();
      
    }
      
    function increment(type){
      if (running){
        return;
      }
      if (type == "session"){
        if (sessionLength >=  60){
          return;
        }
        setSessionLength(prev => (prev + 1));
        
      }
      if (type =="break"){
        if (breakLength >= 60){
          return;
        }
        setBreakLength(prev => (prev + 1));
        
      }
      
    }
    
    function decrement(type){
      if (running){
        return;
      }
      if (type == "session"){
        if (sessionLength <= 1){
          return;
        }
        setSessionLength(prev => (prev - 1));
        
      }
      if (type =="break"){
        if (breakLength <= 1){
          return;
        }
        setBreakLength(prev => (prev - 1));
        
      }
    }
  
    return(
      <div id="main">
        <Settings breakLength={breakLength} sessionLength={sessionLength} increment={increment} decrement={decrement}/>
        <Clock timerState={timerState} timeLeft={`${Math.floor(timeLeft / 60).toString().padStart(2, "0")}:${(timeLeft %  60).toString().padStart(2, "0")}`}/>
        <Controls startStop={startStop} reset={reset} running={running}/>
        <h4 style={{"text-align": "center"}}>By Evan Gary for FreeCodeCamp Front End Curriculum</h4>
        
        
        
      </div>
    )
    
}

