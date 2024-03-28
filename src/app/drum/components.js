function DrumPad(props){
    return(
      <div 
        id={props.name}
        name={props.name} 
        sound={props.sound} 
        className="drum-pad" 
        onClick={()=> props.playSound(props.id, props.name)}>
        {props.id}
        <audio className="clip" id={props.id} src={`https://s3.amazonaws.com/freecodecamp/drums/${props.sound}.mp3`}/>
      </div>
    )
  }
  
export function DrumPanel(props){
    return(
      <div id="drum-machine">
        <DrumPad className="drum-pad" id="Q" sound="Heater-1" name="Heater 1" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="W" sound="Heater-2" name="Heater 2" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="E" sound="Heater-3" name="Heater 3" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="A" sound="Heater-4_1" name="Heater 4" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="S" sound="Heater-6" name="Clap" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="D" sound="Dsc_Oh" name="Open Hat" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="Z" sound="Kick_n_Hat" name="Kick-n'-Hat" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="X" sound="RP4_KICK_1" name="Kick" playSound={props.playSound}/>
        <DrumPad className="drum-pad" id="C" sound="Cev_H2" name="Closed Hat" playSound={props.playSound}/>
        
        
        
      </div>
    )
  }