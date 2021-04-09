import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent(){

    function childData(message){
        alert(message)
        
    }

    return(
        <div className="Border">
            <ChildComponent handleClick= {childData}  />
        </div>
    )
}

export default ParentComponent