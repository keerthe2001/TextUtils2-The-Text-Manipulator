import React,{useState} from 'react'


export default function Form(props) {
    
    function handletheclick(){
        console.log("uperwas clciked" + text);
        let newText = text.toUpperCase();

        setText(newText);
        props.showAlert('Converted To Upper Case','success');

    }
    function handletheloclick(){
        console.log("uperwas clciked" + text);
        let newText = text.toLocaleLowerCase();

        setText(newText);
        props.showAlert('Converted To Lower Case','success');

    }
    
    const handlethechange=(event)=>{
        setText(event.target.value);
    }
    
    const [text,setText] = useState("Enter the Text");
    
  return (
    <>

    <div className='container my-4' style={{color: props.Mode === 'light'?'black':'white'}} >
        <h1>
            {props.heading}
        </h1>
        <div className="form-group">
            <textarea style={{backgroundColor: props.Mode === 'light'?'white':'#091a4d',color: props.Mode === 'light'?'black':'white'}} className="form-control" value={text} onChange={handlethechange} id="exampleFormControlTextarea1" rows="8"></textarea>
        </div>
        <button className={`btn btn-${props.Mode === 'light'?'primary':'dark'} my-2 mx-1`} onClick={handletheclick}>Convert To Uppercase</button>
        <button className={`btn btn-${props.Mode === 'light'?'primary':'dark'}`} onClick={handletheloclick}>Convert To Lowercase</button>
    </div>
    <div className='container' style={{color: props.Mode === 'light'?'black':'white'}}>
        <h2 >Text Summary</h2>
        <div>
            {text.split(" ").length} words and {text.length} charecters
        </div>
        <h2>Text Preview</h2>
        <div>
            {text.length>0?text:"Enter Any Text to preview it"}
        </div>
    </div>
    </>
  )
}
