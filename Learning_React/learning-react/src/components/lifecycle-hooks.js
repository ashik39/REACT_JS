import React, {useState, useEffect} from 'react'

function LifeCycle(){
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect( () => {
        console.log('useEffect - Updating document title')
        document.title = `You clicked ${count} times`
    },[count]
    )


    return (
        <div>
            <h2>Life cycle using hooks</h2>
            <h4>Executes only for button click</h4>
            <input type='text' value = {name} onChange = {e => (setName(e.target.value))}/>
            <button onClick = {() => setCount(count + 1)}>Click {count} times</button>
        </div>
    )
}

export default LifeCycle