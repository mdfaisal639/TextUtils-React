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
        
       
        navigator.clipboard.writeText(text)
        
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
        <h2>{props.heading}</h2>
            <textarea id="myBox" cols="25" rows="5" value={text} onChange={handleOnChange} className="form-control" style={{backgroundColor:props.mode==='dark'?'#90a2a9':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick} >Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpaces} >Remove Extra Spaces</button>
      
      
      
      
      
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{ return element.length!==0}).length} words and {text.length} character</p>
        <p>{0.008*text.split(" ").filter((element)=>{ return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
   </> 
  )
}
