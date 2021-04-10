import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent(){

    function childData(message){
        alert(message)
    }
    //childData("Hello function call")

    return(
        <div className="Border">
            <ChildComponent handleClick= {childData}  />
            <h2></h2>
        </div>
    )
}

export default ParentComponent