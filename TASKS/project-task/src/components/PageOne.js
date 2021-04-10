import React,{ useState } from 'react'
//import PageDetails from './PageDetails';
//import PageTwo from './PageTwo'
function PageOne(props){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [firstNameError,setFirstNameError] = useState('');
    const [lastNameError,setLastNameError] = useState('');
//    const [isDisplay1,setIsDisplay1] = useState('show');
//    const [isDisplay2,setIsDisplay2] = useState('hide');

    function change(event){
        const name = event.target.name;
        const value = event.target.value;
        switch (name){
            case "firstname":
                setFirstName(value);
                break;
            case "lastname":
                setLastName(value);
                break;
            default:
                return;
        }
    }

    function validate(){
        
        if (firstName.trim() === ''){
            setFirstNameError('*Name cant be blank');
        }
        else{
            setFirstNameError(''); 
        }

        if (lastName.trim() === ''){
            setLastNameError('*Name cant be blank');
            return false;
        }
        else{
            setLastNameError(''); 
            return true;
        }
    }

    function submitOne(event){
        
        event.preventDefault();
        const isValidate = validate();
        if(isValidate){
            
//            setIsDisplay1('hide')
            //setIsDisplay2('show')
            // return(
            //     <PageTwo />
            // )
        // alert(`Form Submitted \n  previous={setIsDisplay('show')}
        // Your First Name : ${firstName} \n
        // Your Last Name : ${lastName} \n`);
        }        
    }

    return(
        <div className="pageone">
            <form onSubmit={submitOne}>
            <h2 className ="middle">Step - 1</h2>

            <label className="form-label">First Name :</label>
            <input type ="text" className="form-control width" aria-describedby="emailHelp"
            name="firstname" placeholder="Name" value={firstName} onChange = {change}/>                
            <p style = {{color : 'red'}}>{firstNameError}</p>

            <label className="form-label">Last Name :</label>
            <input type ="text" className="form-control width" aria-describedby="emailHelp"
            name="lastname" placeholder="Name" value={lastName} onChange = {change}/>                
            <p style = {{color : 'red'}}>{lastNameError}</p>

            <button className="btn btn-primary rightcorner2" type ="submit" value = "NEXT" onClick={() => props.getName(firstName,lastName)}>NEXT</button>
            </form>
        </div>
    )
}


export default PageOne