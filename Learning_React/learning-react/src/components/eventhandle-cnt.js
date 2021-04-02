import React from 'react'

function FunctionClick(){
    function clickHandler(){
        console.log("Button Clicked")
    }

    return (
        <div>
            <h1>Click button</h1>
            <button onClick = {clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick