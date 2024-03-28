import { useEffect } from "react";

export default function Page(){

    function stepGame(){
        advance()
    }
    
    function startGame(){
        console.log("start")
        if (!running){
            timer = setInterval(advance, speed)
        }
        running = true
    }
    
    function stopGame(){
        clearInterval(timer)
        running = false
    }
    
    function resetGame(){
        step = 0
        stopGame()
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                state[i][j] = false
                nextState[i][j] = false
            }
        }
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                let idToSet = i.toString().padStart(4, '0') + "x" + j.toString().padStart(4,'0')
                $("#" + idToSet).css("background-color", state[i][j] ? aliveColor : deadColor)
            }
        }
    }
    
    function randomizeGame(){
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                state[i][j] = Math.random() > 0.5 ? true : false
            }
        }
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                let idToSet = i.toString().padStart(4, '0') + "x" + j.toString().padStart(4,'0')
                $("#" + idToSet).css("background-color", state[i][j] ? aliveColor : deadColor)
            }
        }
    }
    
    function changeSpeed(value){
        console.log(value)
        speed = value
        if (running){
            clearInterval(timer)
            timer = setInterval(advance, speed)
        }
    }
    
    function checkNeighbors(row, column){
        let aliveNeighbors = 0
        try{
            if (state[row - 1][column - 1]){
                aliveNeighbors++
            }
            if (state[row - 1][column]){
                aliveNeighbors++
            }
            if (state[row - 1][column + 1]){
                aliveNeighbors++
            }
            if (state[row][column + 1]){
                aliveNeighbors++
            }
            if (state[row + 1][column + 1]){
                aliveNeighbors++
            }
            if (state[row + 1][column]){
                aliveNeighbors++
            }
            if (state[row + 1][column - 1]){
                aliveNeighbors++
            }
            if (state[row][column - 1]){
                aliveNeighbors++
            }
        }
        catch(e){}
        return aliveNeighbors
    }
    
    function advance(){
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                if (checkNeighbors(i, j) < 2 && state[i][j]){
                    nextState[i][j] = false
                }
                if (checkNeighbors(i, j) > 3 && state[i][j]){
                    nextState[i][j] = false
                }
                if (checkNeighbors(i, j) == 3 && !state[i][j]){
                    nextState[i][j] = true
                }
            }
        }
        state = structuredClone(nextState)
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                let idToSet = i.toString().padStart(4, '0') + "x" + j.toString().padStart(4,'0')
                $("#" + idToSet).css("background-color", state[i][j] ? aliveColor : deadColor)
            }
        }
        step++
    }
    
    function tileClick(event){
        let id = event.target.id
        
        let row = parseInt(id.slice(0, 4))
        let col = parseInt(id.slice(5))
        if (state[row] && state[col]){
            state[row][col] = !state[row][col]
        }
        $("#" + id).css("background-color", state[row][col] ? aliveColor : deadColor)
    }

useEffect( () => {
    const $ = require( "jquery" )( window );

})

    return(
        <div className="main">
            <h1>Conway&aposs Game of Life</h1>
            <div id="game-grid" className="main-graphic"></div>
            <div className="control-bar">
                <input type="range" min="100" max="2000" value="1000" className="slider" id="speed-slider" oninput="changeSpeed(this.value)" />
                <button id="step-button" className="control-button" onclick="stepGame()">Step</button>
                <button id="start-button" className="control-button" onclick="startGame()">Start</button>
                <button id="stop-button" className="control-button" onclick="stopGame()">Stop</button>
                <button id="reset-button" className="control-button" onclick="resetGame()">Reset</button>
                <button id="randomize-button" className="control-button" onclick="randomizeGame()">Randomize</button>
            </div>
        </div>
        )
}