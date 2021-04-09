import React from 'react'
import ChildComponent from './ChildComponent'

function ParentComponent(){


    return(
        <div className="Border">
            <ChildComponent message="Hello I am passed from Parent to child"/>
        </div>
    )
}

export default ParentComponent