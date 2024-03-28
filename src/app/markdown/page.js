"use client"
import { Editor,Preview } from "./components";
import './markdown.css'
import { useState } from "react";
const marked = require('marked')
export default function Page(){
    const initText = `
    # This is a markdown previewer
    ## Here is a subheading\n
    You can put in [links](http://www.google.com)\n
    Some **Code**:
    
    \`const text="Hello World"\`
    
    
    \`\`\`
    let a = 2;
    let b = 5;
    const sum = a + b;
    
    \`\`\`
    - List Items (This is item 1)
    - List Item 2
      - Indented List Item
    > Block Quote
    
    ![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
    
    `;
      
      const [editorText, setEditorText] = useState(initText);
      const [convertedText, setConvertedText] = useState(marked.parse(initText));
      
    
      function convertText(event){
       
        const value = event.target.value;
        setEditorText(value);
        const newText = marked.parse(value);
        setConvertedText(newText);
         
      }
      
      return(
        <div>
          <Editor handleChange={convertText} text={editorText}/>
          <Preview text={convertedText}/>
          <h4 style={{"text-align": "center"}}>By Evan Gary for FreeCodeCamp Front End Curriculum</h4>
        </div>
      )
      
      
      
      
}