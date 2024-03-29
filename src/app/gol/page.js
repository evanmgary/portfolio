"use client"
import { useState, useEffect, useCallback, useRef } from "react";
import { GameGrid } from "./components";
import "./styles.css"

export default function Page(){
    const [speed, setSpeed] = useState(1000)
    const [running, setRunning] = useState(false)
    const timerVar = useRef(null)
    const [step, setStep] = useState(0)
    const [rows, setRows] = useState(50)
    const [columns, setColumns] = useState(75)
    const [state, setState] = useState(() => new Array(rows).fill().map(() => new Array(columns).fill(false)))

    function stepGame(){
        advance()
    }
    
    function startGame(){
        console.log("start")
        setRunning(true)
    }
    
    function stopGame(){
        console.log("stop")
        setRunning(false)
    }

    function resetGame(){
        setStep(0)
        stopGame()
        setState(new Array(rows).fill().map(() => new Array(columns).fill(false)))
    }
    
    function randomizeGame(){
        const newState = structuredClone(state)
        for (let i = 0; i < rows; i++){
            for(let j = 0; j < columns; j++){
                newState[i][j] = Math.random() > 0.5 ? true : false
            }
        }
        setState(newState)
    }
    
    function changeSpeed(e){
        const value = e.target.value
        console.log(value)
        setSpeed(value)
    }
    
    const advance = useCallback(() => {
        //This uses a large updater function to update the state so that state is not a dependency for the useEffect
        setState(oldState => {
            function checkNeighbors(row, column){
                let aliveNeighbors = 0
                try{
                    if (oldState[row - 1][column - 1]){
                        aliveNeighbors++
                    }
                    if (oldState[row - 1][column]){
                        aliveNeighbors++
                    }
                    if (oldState[row - 1][column + 1]){
                        aliveNeighbors++
                    }
                    if (oldState[row][column + 1]){
                        aliveNeighbors++
                    }
                    if (oldState[row + 1][column + 1]){
                        aliveNeighbors++
                    }
                    if (oldState[row + 1][column]){
                        aliveNeighbors++
                    }
                    if (oldState[row + 1][column - 1]){
                        aliveNeighbors++
                    }
                    if (oldState[row][column - 1]){
                        aliveNeighbors++
                    }
                }
                catch(e){}
                return aliveNeighbors
            }

            const nextState = structuredClone(oldState)
            for (let i = 0; i < rows; i++){
                for(let j = 0; j < columns; j++){
                    if (checkNeighbors(i, j) < 2 && oldState[i][j]){
                        nextState[i][j] = false
                    }
                    if (checkNeighbors(i, j) > 3 && oldState[i][j]){
                        nextState[i][j] = false
                    }
                    if (checkNeighbors(i, j) == 3 && !oldState[i][j]){
                        nextState[i][j] = true
                    }
                }
            }
            return nextState
        })
        setStep(step => step + 1)
    }, [columns, rows])
    
    function tileClick(row, col){
        const newState = structuredClone(state)
        newState[row][col] = !newState[row][col]
        setState(newState)
    }

    //Handle start/stop and timer
    useEffect(() =>{
        if (running){
            if (timerVar.current){
                clearInterval(timerVar.current)
                timerVar.current = setInterval(advance, speed)
            }
            else{
                timerVar.current = setInterval(advance, speed)
            }
        }
        else{
            clearInterval(timerVar.current)
            timerVar.current = null
        }
        return(
            () => {
                clearInterval(timerVar.current)
                timerVar.current = null
            }
        )
    }, [running, speed, advance])
    

    return(
        <div className="main">
            <h1>{"Conway's Game of Life"}</h1>
            <GameGrid id="game-grid" state={state} handleClick={tileClick}></GameGrid>
            <div className="control-bar">
                <input type="range" min="100" max="2000" defaultValue={1000} className="slider" id="speed-slider" onInput={changeSpeed} />
                <button id="step-button" className="control-button" onClick={stepGame}>Step</button>
                <button id="start-button" className="control-button" onClick={startGame}>Start</button>
                <button id="stop-button" className="control-button" onClick={stopGame}>Stop</button>
                <button id="reset-button" className="control-button" onClick={resetGame}>Reset</button>
                <button id="randomize-button" className="control-button" onClick={randomizeGame}>Randomize</button>
            </div>
        </div>
        )
}