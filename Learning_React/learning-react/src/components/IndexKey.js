import React from 'react'

function IndexKey(){
    const arr = ['zero', 'one', 'two', 'three']

    const newArr = arr.map((ar,index) =>(
        <h2 key={index}>{index} : {ar}</h2>
    ))

    return newArr 
}

export default IndexKey