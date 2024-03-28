export function Editor(props){
    return(
      <div id="editor-container">
        <header>Editor</header>
        <textarea id="editor" value={props.text} onChange={props.handleChange}/>
        
      </div>
      
    )
  }
  
export function Preview(props){
    const items = props.text.split(/\n/);
  
    return(
      <div>
        <header>Preview</header>
        <div id="preview" dangerouslySetInnerHTML={{__html: props.text}}></div>
        
       
      </div>
    )
    
  }

  
  