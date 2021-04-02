import React from 'react'

function FunctionCheck(){
    const employees = ['ashik']

    return(
        <div>
            {employees.length > 0 && (
            <div>
                
                <h1>Employee list:</h1>
                {employees.map((employee) => (
                    <h3>{employee}</h3>
                ))}
            </div>    
            
            )}
        </div>
    )
}


export default FunctionCheck