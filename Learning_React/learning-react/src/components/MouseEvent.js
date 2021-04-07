import React,{ useState } from 'react'

function MouseEvent(){
    const [text,setText] = useState("Text BEFORE Mouse Over")
    
    const MouseOver = () => {
        const newText = "Now Mouse OVER" 
        setText(newText)
    }

    const MouseOut = () => {
        const newText = "Now Mouse OUT" 
        setText(newText)
    }
    return (
        <div>
            <h2 onMouseOver= {MouseOver} onMouseOut= {MouseOut}>Mouse Over and Out Here</h2>
            <h3>{text}</h3>
        </div>
    )
}

export default MouseEvent