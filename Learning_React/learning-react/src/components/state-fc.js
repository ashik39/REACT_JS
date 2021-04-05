import React, { useState } from 'react'

function HookCounter(){
    const [count , setCount] = useState(0)

    return(
        <div>
            <h2>STATE USING HOOKS</h2>
            <button onClick={() => setCount(count + 1 )}>COUNT : {count}</button>
        </div>
    )
}

export default HookCounter