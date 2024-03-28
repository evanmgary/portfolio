export function CalcButton(props){
  
    return(
      <div className="button" id={props.id} value={props.value} onClick={() => props.handleClick(props.value)} >
        {props.value}
      </div>
    
    )
  }
  
export function CalcFrame(props){
    CalcButton.defaultProps = {
    handleClick : props.handleClick
    }
return(
    <div className="frame">
    <CalcButton id="clear" value="AC" />
    <CalcButton id="divide" value="/" />
    <CalcButton id="multiply" value="*" />
    <CalcButton id="seven" value="7" />
    <CalcButton id="eight" value="8" />
    <CalcButton id="nine" value="9" />
    <CalcButton id="subtract" value="-" />
    <CalcButton id="four" value="4" />
    <CalcButton id="five" value="5" />
    <CalcButton id="six" value="6" />
    <CalcButton id="add" value="+" />
    <CalcButton id="one" value="1" />
    <CalcButton id="two" value="2" />
    <CalcButton id="three" value="3" />
    <CalcButton id="equals" value="=" />
    <CalcButton id="zero" value="0" />
    <CalcButton id="decimal" value="." />
    
    </div>
)
}

export function Viewer(props){
return(
    <div id="displayAll">
    <h2 className="expression">{props.expression}</h2>
    <h2 id="display" className="current">{props.current}</h2>
    </div>
)
}
  
  
  