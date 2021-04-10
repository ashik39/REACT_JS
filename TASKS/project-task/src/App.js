//import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import PageThree from './components/PageThree'
//import PageDetails from './components/PageDetails'
import { useState } from 'react';

function App() {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [country,setCountry] = useState('');
    const [state,setState] = useState('');
    const [city,setCity] = useState('');

    function fullName(nameFirst,nameLast){
    setFirstName(nameFirst)
    setLastName(nameLast)
    }

    function contact(email,phone){
      setEmail(email)
      setPhone(phone)
    }

    function location(country,state,city){
      setCountry(country)
      setState(state)
      setCity(city)
    }

  return (
    <div className="Border">

      <div>
        <PageOne  getName={fullName}/>
      </div>
      
      <div>
        <PageTwo getContact={contact}/>
      </div>

      <div>
        <PageThree getLocation={location} />
      </div>

      <div className="middle">
        <h2 className ="middle">Details</h2>
        <h3>{firstName}</h3>
        <h3>{lastName}</h3>
        <h3>{email}</h3>
        <h3>{phone}</h3>
        <h3>{country}</h3>
        <h3>{state}</h3>
        <h3>{city}</h3> 
        
      </div>

      {/* <div className="pagedetails">
      </div> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
