import React,{useState} from 'react'

export default function TextForms(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');

    }
    const handleLoClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase','success');

    }
    const handleClearClick=()=>{
        // console.log("Uppercase was clicked" + text);
        let newText=''
        setText(newText);
        props.showAlert('Text cleared','success');

    }
    const handleCopy=()=>{
        
        let newText=document.getElementById('myBox')
        newText.select()
        navigator.clipboard.writeText(newText.value)
        props.showAlert('Text has been copied','success');

    }
    const removeExtraSpaces=()=>{
        
        let newText=text.split(/[ ]+/)

        setText(newText.join([" "]))
        props.showAlert('Extraspace has been removed','success');
        

    }
    const handleOnChange=(event)=>{
        // console.log("On change");
        setText(event.target.value)
    }

    const[text,setText]= useState('');

  return (
    <>
    <div className='container'>

        <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
            <textarea id="myBox" cols="25" rows="5" value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black',cursor:'pointer'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLoClick} >Convert to Lowercase</button>
        <button className="btn btn-primary mx-3" onClick={handleClearClick} >Clear text</button>
        <button className="btn btn-primary mx-3" onClick={handleCopy} >Copy text</button>
        <button className="btn btn-primary mx-3" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
      
      
      
      
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
   </> 
  )
}
