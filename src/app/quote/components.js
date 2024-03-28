export function QuoteBox(props){
    return(
      <div id="quote-box">
        <h2 id="text">{props.text}</h2>
        <p id="author">{props.author}</p>
        <div className="buttons">
          <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank"><button id="tweetButton">Tweet</button></a>
          <button id="new-quote" onClick={props.newQuote}>New Quote</button>
        </div>
        
      </div>
    )
  }
  