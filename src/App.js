import React ,{ useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
// import S from 'react-router';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";



function App() {
  const toggleMode=() =>{
    if(mode==='dark'){
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert('light mode has been enabled','success')
      // document.title='Textutils-Light mode';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='grey'
      showAlert('Dark mode has been enabled','success')
      // document.title='Textutils-Dark mode';
    }
  }
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null)
  const showAlert=(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  } 
  return (
    <>
    <Router>
    <Navbar title='TextUtils' About='About ' mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
    <Routes>
          <Route path="/about" element={<About  mode={mode}/>}/>
          
          <Route path="/" element={ <TextForms showAlert={showAlert} heading= " Try toTextutils-word counter,character counter,remove extra spaces" mode={mode} />}/>
        </Routes>
        {/* <TextForms showAlert={showAlert} heading= "Enter the text to analyze" mode={mode} /> */}
      
    </div>
    </Router>

    


    </>
  );
}

export default App;
