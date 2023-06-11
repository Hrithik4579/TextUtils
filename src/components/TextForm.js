import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,settext]=useState("enter text");
    const handleonclick=()=>{
        let newtext=text.toUpperCase();
        settext(newtext);
    }
    const handleonchange=(e)=>{
        console.log("changed");
        settext(e.target.value);
    }
    const handleloclick=()=>{
        let newtextl=text.toLowerCase();
        settext(newtextl);
    }
    const handleonspeak=()=>{
        let msg=new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
    }
  return (
    <>
    <div className='container'>
      
<div className="mb-3">
<h3 style={{color: props.mode==='light'?'black':'white'}}>{props.heading}</h3>
  <textarea className="form-control" id="exampleFormControlTextarea1" style={{backgroundColor: props.mode==='light'?'white':'grey',color: props.mode==='light'?'black':'white'}} value={text} onChange={handleonchange} rows="7"></textarea>
</div>
<button className="btn btn-primary" onClick={handleonclick}>convert to uppercase</button>
<button className="btn btn-primary mx-3" onClick={handleloclick}>convert to lowercase</button>
<button className="btn btn-primary mx-3" onClick={handleonspeak}>Speak</button>
    
    </div>
    <div className='container my-3' style={{color: props.mode==='light'?'black':'white'}}>
        <h2>Your Summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{text.split(' ').length*0.008} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
TextForm.propTypes={
    heading: PropTypes.string.isRequired
}
TextForm.defaultProps={
    heading:"enter the text"
}