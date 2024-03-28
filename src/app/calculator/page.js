"use client"
import { CalcButton, CalcFrame, Viewer } from "./components";
import { useState } from "react";
import "./calculator.css"
export default function Page(){
    const [currentToken, setCurrentToken] = useState(0);
    const [allTokens, setAllTokens] = useState([]);
    let nextToken = "";
    const [fsmState, setFsmState] = useState("start"); //start, num, oper, oper-, eval
    
    /*This is designed such that the allTokens array only contains previously accepted tokens
      In the upper display there is a join of all previously accepted tokens from the allTokens array
      and the most recent unaccepted token (currentToken, which may change)
      
      The parsing of tokens is done with something similar to a finite state machine that keeps track of whether
      the calculator is trying to create a number or add an operator token
    */
    
    function handleClick(value){
      nextToken = value;
      //clear and eval are checked first since they immediately change the state
      if(nextToken == "AC"){
        setAllTokens([]);
        setCurrentToken(0);
        setFsmState("start");
        return;
      }
      
      if(nextToken == "="){
        
        const evaluated = evaluate();
        const lastToken = currentToken; //needs to get the most recent token into the shown expression
        setCurrentToken(evaluated);
        setAllTokens(cur => [...cur, lastToken, "="]);
        setFsmState("eval");
        return;
      }
      
      if(fsmState == "start"){
        if (allTokens.length > 0){
          setAllTokens([]);
        }
        startState();
      }
      else if (fsmState == "eval"){
        evalState();
      }
      else if (fsmState == "num"){
        numState();
      }
      else if (fsmState == "oper"){
        operState();
      }
      else if (fsmState == "oper-"){
        operNegState();
      }
  
      
    }
    
    function startState(){
      if (nextToken.match(/[\d\.]/)){
        setCurrentToken(cur => (nextToken));
        setFsmState("num");
      }
      
    }
    
    function numState(){
      if (nextToken == "."){
        if (currentToken.includes(".")){
          return;
        }
        setCurrentToken(cur => (cur + "."));
      }
      
      if (nextToken == "0"){
        if ((currentToken == "0") || (currentToken == "-0")){
          return;
        }
        setCurrentToken(cur => (cur + "0"));
        
      }
      
      if (nextToken.match(/[1-9]/)){
        setCurrentToken(cur => (cur + nextToken));
      }
      
      if (nextToken.match(/[/\*\-\+]/)){
        setCurrentToken(cur => (nextToken));
        setAllTokens(cur => [...cur, currentToken]);
        setFsmState("oper");
      }
        
    }
    
    function operState(){
      if (nextToken == "-"){
        setCurrentToken(cur => (cur + nextToken));
        setFsmState("oper-");
      }
      if (nextToken.match(/[\+\*/]/)){
        setCurrentToken(cur => (nextToken));
      }
      if (nextToken.match(/[\d.]/)){
        setAllTokens(cur => [...cur, currentToken]);
        setCurrentToken(cur => (nextToken));
        setFsmState("num")
      }
      
    }
    
    function operNegState(){
      if (nextToken.match(/[\d.]/)){
        //This is a bit of a hack so that the - goes on the following number token
        setAllTokens(cur => [...cur, currentToken[0]]);
        setCurrentToken(cur => ("-" + nextToken));
        setFsmState("num");
      }
      if (nextToken == "-"){
        return;
      }
      if (nextToken.match(/[+*/]/)){
        setCurrentToken(cur => (nextToken));
        setFsmState("oper");
      }
      
    }
    
    function evalState(){
      if (nextToken.match(/[\d\.]/)){
        setCurrentToken(nextToken);
        setAllTokens([]);
        setFsmState("num");
      }
      else if (nextToken.match(/[/\*\-\+]/)){
        const startToken = currentToken;
        setCurrentToken(nextToken);
        setAllTokens([startToken]);
        setFsmState("oper");
      }
    }
     
    //using immediate evaluation
    function evaluate(){
      const evalQueue = [...allTokens, currentToken, "end"];
      let term1 = undefined;
      let termOp = undefined;
      let term2 = undefined;
      if (evalQueue == ["end"]){
        return 0;
      }
      term1 = +(evalQueue.shift());
      console.log(term1);
      
      while (true){
        termOp = evalQueue.shift();
        console.log(termOp);
        if (termOp == "end"){
          return term1;
        }
        term2 = evalQueue.shift();
        console.log(term2);
        if (term2 == "end"){
          return term1;
        }
        term2 = +term2;
        
        if (termOp == "+"){
          term1 = term1 + term2;
        }
        if (termOp == "-"){
          term1 = term1 - term2;
        }
        if (termOp == "*"){
          term1 = term1 * term2;
        }
        if (termOp == "/"){
          term1 = term1 / term2;
        }
        
      }
      
    }
    
    
    
    return(
      <div id="all">
        <div id="main">
          <Viewer expression={allTokens.join("") + currentToken} current={currentToken}/>
          <CalcFrame handleClick={handleClick}/>
          {/*<h2>{`state ${fsmState}`}</h2>*/}
        </div>
        <h3 style={{"text-align": "center"}}>By Evan Gary for FreeCodeCamp Front End Curriculum</h3>
      </div>
    
    
    )
}