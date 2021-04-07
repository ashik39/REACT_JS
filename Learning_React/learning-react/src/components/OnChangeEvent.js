import React,{ useState } from 'react'

function OnChangeEvent(){

    const [name,setName] = useState('')

    function UpperCase(e){
        const upper = e.target.value.toUpperCase()
        setName(upper)

    }
    return(
        <div>
            <h2>Input will be in UPPERCASE</h2>
            <input type="text" name="name" onChange = {UpperCase} value={name} />
        </div>
    )
}

export default OnChangeEvent

