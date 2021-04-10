import React, { useState } from 'react'

// import PageDetails from './PageDetails'
function PageTwo(props){
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [emailError,setEmailError] = useState('');
    const [phoneError,setPhoneError] = useState('');
    //const [isDisplay,setIsDisplay] = useState('show');
    //const [isDisplay2,setIsDisplay2] = useState('');

    function change2(event){
        //setIsDisplay2(props.className)
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            default:
                return;
        }
    }

    function validate2(){
        
        if (email.trim() === ''){
            setEmailError('*Email cant be blank');
        }
        else{
            setEmailError(''); 
        }

        if (phone.trim() === '' || phone.length !== 10){
            setPhoneError('*Phone cant be blank');
            return false;
        }
        else{
            setPhoneError(''); 
            return true;
        }
    }

    function submitTwo(event){
        
        event.preventDefault();
        const isValidate = validate2();
        if(isValidate){
            // setIsDisplay('hide')
            // // return(
            // //     // <PageTwo previous={setIsDisplay('show')}/>
            // // )
        alert(`Form Submitted \n
        Your First Name : ${email} \n
        Your Last Name : ${phone} \n`);
        }        
    }

    return(
        <div className="pagetwo">
            <h2 className ="middle">Step - 2</h2>
            <form onSubmit={submitTwo}>
            <label className="form-label">Email :</label>
            <input type ="text" className="form-control width" aria-describedby="emailHelp"
            name="email" placeholder="Email" value={email} onChange = {change2}/>  

            <p className="red">{emailError}</p>

            <label className="form-label">Phone :</label>
            <input type ="number" className="form-control width" aria-describedby="emailHelp"
            name="phone" placeholder="Phone" value={phone} onChange = {change2}/>                
            <p className="red">{phoneError}</p>
            <div className="inline">
            <input className="btn btn-primary leftcorner" type ="submit" value = "PREVIOUS"/>
            <button className="btn btn-primary rightcorner" type ="submit" value = "NEXT" onClick={() => props.getContact(email,phone)}>NEXT</button>
            </div>
        </form>

        </div>
    )
}


export default PageTwo