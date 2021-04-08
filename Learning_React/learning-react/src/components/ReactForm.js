import React,{ useState } from 'react'

function ReactForm(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    function Change(event){
        const Name = event.target.name
        const Email = event.target.name

        setName(Name)
        setEmail(Email)

    }

    function FormSubmit(event){
        event.preventDefault()
        alert(`Form Submitted \n
        Your Name : ${name} \n
        Your Email : ${email}`)
    }

    return (
        <div>
            <form onSubmit = {FormSubmit}>
                <input type ="text" name="name" placeholder="Name" onChange = {Change}/><br/>
                <p></p>
                <input type ="email" name="email" placeholder="Email" onChange = {Change} /><br/>
                <p></p>
                <input type ="submit" value = "SUBMIT" />
            </form>
        </div>
    )
}


export default ReactForm