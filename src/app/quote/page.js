"use client"
import { QuoteBox } from "./components";
import './quotes.css'
import testQuotes from "./testQuotes.json"
import { useState, useEffect } from "react";
export default function Page(){
  

    function newQuote(){
      const randNum = Math.floor(Math.random() * 50);
      setQuote(allQuotes[randNum]);
      
    }
    
    const [allQuotes, setAllQuotes] = useState(testQuotes);
    const [quote, setQuote] = useState({q:"TEST QUOTE", a: "TEST AUTHOR"});
    
    useEffect( () => {
      newQuote()
    }
    , [])
    
    //The following code would be used if the app were making an API call upon loading the page
    
    /*React.useEffect(() =>{
      fetch("")
        .then(res => res.json())
        .then(data => setAllQuotes(data))}
      , []);
      */
    
      console.log(allQuotes[1])
    
    
      return(
        <div>
          <QuoteBox text={quote.q} author={quote.a} newQuote={newQuote}/>
          <h3 className="attributions" id="quote-source">Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank">ZenQuotes API</a></h3>
          <h3 className="attributions">By Evan Gary for FreeCodeCamp Front End Curriculum</h3>
        </div>
       )
  
    
  }
  