
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar'
import Textbox from './component/Textbox';
import React,{useState} from 'react';
import Alert from "./component/Alert";



function App() {

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleClick = () =>{

    if(mode==="light")
    {
      setMode("dark");
      document.body.style.backgroundColor = "#355380";
      showAlert("Dark mode enabled","success");
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode enabled","success");
    }

  }

  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);

  console.log("App "+mode);
  return (
    <>
    
      <Navbar title="TextUtils" toggle={toggleClick} mode={mode} />
      <Alert alert={alert} />
      <Textbox title="Enter the text" mode={mode} showAlert={showAlert}/>
      {/* <About /> */}

    </>
  );
}

export default App;
