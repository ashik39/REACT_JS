import React from 'react'

function ChildComponent(props){
    return(
        <div>
            <button onClick ={ () => props.handleClick("Hello I am passed from child to parent")}>Click Me</button>
            {/* <button onClick ={props.handleClick}>Click Me</button> */}
        </div>
        // <h2>{props.message}</h2>
    )
}

export default ChildComponent