import React, { useState } from 'react'

function BasicForm(){
    const [email, setEmail] = useState('')
    
    const handleEmailChange = event => {
      setEmail(event.target.value)
    }
  
    const handleSubmit = event => {
      event.preventDefault()
      alert('form submited')
    }
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email address</label>
                <input type="email" name="email" placeholder="Enter email" onChange={handleEmailChange} value={email}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
  }


export default BasicForm