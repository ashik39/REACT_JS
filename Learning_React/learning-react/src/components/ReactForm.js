import React,{ useState } from 'react'

function ReactForm(){
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [gender,setGender] = useState('');
    const [address,setAddress] = useState('');
    const [nameError,setNameError] = useState('');
    const [emailError,setEmailError] = useState('');
    const [genderError,setGenderError] = useState('');
    const [addressError,setAddressError] = useState('');

    function validate(){
        
        if (name.trim() === ''){
            setNameError('*Name cant be blank');
        }
        else{
            setNameError(''); 
        }
        if(email.trim() === ''){
            setEmailError('*Email cant be blank');
            
        }
        else{
            setEmailError('');
        }

        if(gender.trim() === ''){
            setGenderError('*Select Gender');
            
        }
        else{
            setGenderError('');
        }

        if(address.trim() === ''){
            setAddressError('*Address cant be blank');
            return false;
        }
        else{
            setAddressError('');
            return true;
        }

    }

    function Change(event){
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "gender":
                setGender(value);
                break;
            case "address":
                setAddress(value);
                break;
            default:
                return;
            }
    }

    function formSubmit(event){
        
        event.preventDefault();
        const isValidate = validate();
        if(isValidate){
        alert(`Form Submitted \n
        Your Name : ${name} \n
        Your Email : ${email} \n
        Your Gender : ${gender}\n
        Your Address : ${address}`);
        }        
    }

    return (
        <div className="Border">
            <h1>BASIC FORM</h1>
            <form onSubmit = {formSubmit}>

                <label for="exampleInputEmail1" className="form-label">Name :</label>
                <input type ="text" className="form-control width" id="exampleInputEmail1" aria-describedby="emailHelp"
                name="name" placeholder="Name" value={name} onChange = {Change}/>                
                <p style = {{color : 'red'}}>{nameError}</p>

                <label for="exampleInputEmail1" className="form-label">Email :</label>
                <input className="form-control width" type="email" id="exampleInputEmail1" aria-describedby="emailHelp" 
                name="email" placeholder="Email" value={email} onChange = {Change}/>
                <p style = {{color : 'red'}}>{emailError}</p>
                
                <label>Gender : </label>
                <select className="form-select width" name="gender" value={gender} onChange = {Change}>
                    <option value = "">SELECT</option>
                    <option value = "MALE">MALE</option>
                    <option value = "FEMALE">FEMALE</option>
                </select>
                <p style = {{color : 'red'}}>{genderError}</p><br/>
                
                <label className="form-label">Address : </label>
                <textarea className="form-control width" name ="address" value={address} placeholder="Address" onChange = {Change}/>
                <p style = {{color : 'red'}}>{addressError}</p><br/>
                
                <input className="btn btn-primary" type ="submit" value = "SUBMIT" />
            </form>
        </div>
    )
}


export default ReactForm