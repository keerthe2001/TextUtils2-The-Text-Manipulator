import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
// import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      Type:type
      });

      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
 
  const toggleBtn = ()=>{
    if(Mode === 'light')
    {
      setMode("dark");
        document.body.style.backgroundColor = "#091a4d";
        showAlert('Dark Mode is Enabled!!','success');
        document.title = "TextUtils - DarkMode";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode is Enabled!!','success');
      document.title = "TextUtils - LightMode";

    }
  }
  const [setTheme, setsetTheme] = useState("Normal")
  const Themeselector = ()=>{
    let themevalue = document.getElementById("theme").value;
    if(themevalue == 'Normal')
    {
      document.title = "Normal";
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light Mode is Enabled!!','success');
    }
    else if(themevalue == 'darkGreen')
    {
      document.title = themevalue;
      setsetTheme(themevalue);
      document.body.style.backgroundColor = "#00570a";
      showAlert('Dark Green Theme is Enabled!!','success');
    }
    else if(themevalue == 'darkOrange')
    {
      document.title = themevalue;
      setsetTheme(themevalue);
      document.body.style.backgroundColor = "rgb(234, 121, 0)";
      showAlert('Dark Green Theme is Enabled!!','success');
    }
    
  }
  
  return (
    <>
    {/* <Router> */}
    <Navbar title="Tizon Academy"  Mode={Mode} toggleBtn = {toggleBtn} Themeselector = {Themeselector} setTheme={setTheme}/>
    <Alert alert={alert}/>
    <Form showAlert={showAlert} heading="TextUtils"  Mode={Mode} setTheme={setTheme}/>
    {/* <Alert Alert={Alert}/>  */}
    {/* <Routes> */}
          {/* <Route path="/About" element={<About  Mode={Mode} setTheme={setTheme}/>}>
          </Route>
          <Route path="/Form" element={ <Form showAlert={showAlert} heading="TextUtils"  Mode={Mode} setTheme={setTheme}/>}>
         
          </Route> */}
    {/* </Routes> */}

    {/* </Router> */}
    </>

  );
}

export default App;
