import React, { useState } from "react";



function Textbox(props) {

    const handleUpClick = () =>{
        
        let newText = text.toUpperCase();
        setText(newText);

        if (text){
            props.showAlert("Changed to uppercase","success");
        }
        else{
            props.showAlert("Please enter a text!!","danger");
        }
        
    }

    const handleClearClick = () =>{
        
        let newText = "";
        setText(newText);
        setFind(newText);
        setReplace(newText);
        setFindCount(0);

        if (text){
            props.showAlert("Text cleared","success");
        }
        else{
            props.showAlert("No text entered!!","danger");
        }
        
    }

    const handleLowClick = () =>{
        
        let newText = text.toLowerCase();
        setText(newText);

        if (text){
            props.showAlert("Changed to lowercase","success");
        }
        else{
            props.showAlert("Please enter a text!!","danger");
        }
        
    }

    const handleFindClick = () =>{
        
        let words = text.split(" ");
        let count = 0

        for(let i=0; i< words.length; i++)
        {
            if(find===words[i])
            {
                count = count + 1;
            }
        }

        setFindCount(count);
        
        if (find){
            props.showAlert("Word "+find+" has appeared "+count+" times","success");
        }
        else{
            props.showAlert("Please enter a word!!","danger");
        }
        
    }

    const handleReplaceClick = () =>{
        setText(text.replaceAll(find,replace));
        console.log(replace);
        find && replace && props.showAlert(find+" has been replaced with "+replace,"success");

        if (replace){
            props.showAlert(find+" has been replaced with "+replace,"success");
        }
        else{
            props.showAlert("Please enter a word!!","danger");
        }
    } 

    const handleFindText = (event) =>{
        
        setFind(event.target.value)
    }

    const handleReplaceText = (event) =>{
        
        setReplace(event.target.value)
    }

    const handleOnChange = (event) =>{
        
        setText(event.target.value)
    }

    const[text,setText] = useState("");
    const[find,setFind] = useState("");
    const[findCount,setFindCount] = useState(0);
    const[replace,setReplace] = useState("");
    

    return (

        <>
            <div className="container" >
                <div className="mb-3" >
                    <label for="myBox" class="form-label"><h3>{props.title}</h3></label>
                    <textarea className="form-control" style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
                </div>
                
                <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
                

                <div className="mb-3">
                    <input type="text" class="my-2" id="findText" style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} value={find} onChange={handleFindText} placeholder="abc" />
                    <button className="btn btn-primary mx-2" onClick={handleFindClick}>Find all</button>

                    <input type="text" class="mx-2" id="replaceText" style={{backgroundColor:props.mode==="light"?"white":"grey",color:props.mode==="light"?"black":"white"}} value={replace} onChange={handleReplaceText} placeholder="abc" />
                    <button className="btn btn-primary mx-2" onClick={handleReplaceClick}>Replace all</button>

                    <h2>Total matches found: {findCount}</h2>
        
                </div>
            </div>

            <div className="container my-3" >
                <h2>Your text summary :</h2>
                <p>Words : {(text.split(" ").length)-1} and Characters : {text.length}</p>

                <h2>Preview : </h2>
                <p>{text}</p>
            </div>

        </>
    )
    
}


export default Textbox;