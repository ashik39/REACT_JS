import React, { useState } from 'react'

function HookCounter(){
    const [count , setCount] = useState(0)
    const [name , setName] = useState(['Name'])
    const newname = "New Name"

    

    const [arr, setArr] = useState([0]);
  

    return(
        <div>
            <h2>STATE USING HOOKS</h2>
            <button onClick={() => setCount(count + 1 )}>COUNT : {count}</button>
            
            <h2>ARRAY NUMBER IN STATE</h2>
            <button onClick={() => setArr((arr) => [...arr, arr[arr.length - 1] + 1])}>ADD</button><br></br>
            <p>{arr}</p>

            <h2>ARRAY STRING IN STATE</h2>
            <button onClick={() => setName((name) => [...name,newname]) }>ADD NAME</button><br></br>
            <p>{name}</p>


        </div>

    )
}

export default HookCounter