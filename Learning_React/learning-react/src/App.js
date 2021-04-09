//import logo from './logo.svg';
import './App.css';
//import Hello from './components/hello'
//import Greet from './components/props'
// import HelloWorld from './components/jsx-cnt'
// import FunctionClick from './components/eventhandle-cnt'
// import FunctionCheck from './components/conditionarendering-cnt'
//import HookCounter from './components/state-fc'
//import LifeCycle from './components/lifecycle-hooks'
//import NameList from './components/NameList'
//import IndexKey from './components/IndexKey'
//import OnChangeEvent from './components/OnChangeEvent'
//import OnSubmitEvent from './components/OnSubmitEvent'
//import MouseEvent from './components/MouseEvent'
//import ReactForm from './components/ReactForm'
import ParentComponent from './components/ParentComponent'

function App() {
  return (
    <div className="App">

        <ParentComponent /> 
      
      {/*
      <ReactForm />
      <MouseEvent/>
      <OnSubmitEvent/>
      <OnChangeEvent />
      <IndexKey />
      <NameList />
      <LifeCycle/>
      <HookCounter/> 
      <Hello />
      <Greet name ="Clark" heroName = "Superman" />
      <HelloWorld />
      <FunctionClick/>
      <FunctionCheck/> */}

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
