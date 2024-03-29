export function Square(props){
    const style = {backgroundColor: props.alive ? "yellow" : "lime", gridRow: props.row, gridColumn: props.column}
    return(
        <div id={`${props.column}x${props.row}`} className={"game-tile"} style={style}  onClick={() => props.handleClick(props.row, props.column)}></div>
    )
}

export function GameGrid(props){
    return(
        <div className="main-graphic">
            {props.state.map((row, rIndex) => {
                return row.map((col, cIndex) => <Square key={`${rIndex}${cIndex}`} row={rIndex} column={cIndex} alive={props.state[rIndex][cIndex]} handleClick={props.handleClick}></Square>)
                //for(let i = 0; i < row.length; i++){<Square row={index} column={i} alive={state[index][i]}></Square>}
            })
        }
        </div>
    )
}