import logo from './logo.svg';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import './App.css';
import About from './components/About';
import { useState } from 'react';
//import Alert from './components/Alert'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

let name="hrithik gopal bhagat";
function App() {
  //const [alert,setalert]=useState(null);
  const [mode,setmode]=useState('light');
   /*const showalert=(message,type)=>{
    setalert({
      msg:message,
      type:type
    })
   }*/
  const togglemode=()=>{
    if(mode=='light'){
      setmode('dark');
      document.body.style.backgroundColor='#051b32';
    }
    else{
      setmode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>

   <Navbar title="textutils" mode={mode} togglemode={togglemode}/>
   <div className="container">

   
   <Routes>
          <Route path="/about" element={<About/>}>          
          </Route>
          
          <Route path="/" element={<TextForm heading="Enter the text" mode={mode}/>}>

          </Route>
        </Routes>
        
  
   </div>
  
 
   </>
  )
}

export default App;
