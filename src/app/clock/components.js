export function Controls(props){

    return(  
    <div id="timer-controls">
        <div id="start_stop" onClick={props.startStop}>
        <h1>{props.running ? "STOP" : "START"}</h1>
        </div>
        
        <div id="reset" onClick={props.reset}>
        <h1>RESET</h1>
        </div>
        
        
    </div>
    )

}


export function Settings(props){

    return(

    <div id="settings-frame">
        <div id="break-settings" className="settings-panel">
        <h3 id="break-label">Break Length</h3>
        <div id="break-buttons" className="length-buttons">
            <div id="break-decrement" className="length-controls" onClick={() => props.decrement("break")}>-</div>
            <h1 id="break-length" className="length-time">{props.breakLength}</h1>
            <div id="break-increment" className="length-controls" onClick={() => props.increment("break")}>+</div>
        </div>
        
        </div>
        
        <div id="session-settings" className="settings-panel">
            <h3 id="session-label">Session Length</h3>
            <div id="session-buttons" className="length-buttons">
            <div id="session-decrement" className="length-controls" onClick={() => props.decrement("session")}>-</div>
            <h1 id="session-length" className="length-time">{props.sessionLength}</h1>
            <div id="session-increment" className="length-controls" onClick={() => props.increment("session")}>+</div>
            </div>
        </div>
        
        </div>
        )
    }

//Audio beep is from the freecodecamp 25+5 clock github repo
export function Clock(props){

    return(

    <div id="clock">
        <h2 id="timer-label">{props.timerState}</h2>
        <h1 id="time-left">{props.timeLeft}</h1>
        <audio id="beep" src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav" />
    </div>
        
    )

}

