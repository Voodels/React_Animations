import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [darkMode, setdarkMode] = useState(false)
  const toogleDarkMode = ()=>{
    setdarkMode(!darkMode)
  }
  return (
    <>
    
    <div className={`
    w-full h-screen dark:bg-DMC ${darkMode ? "dark" : ""}`}>

        <Navbar/>

      <div>
          <button
            className=" h-12 w-12 bg-green-400 
            hover:bg-green-800 absolute  right-12 bottom-12  rounded-2xl text-white p-2 font-bold
           dark:bg-blue-300  dark:hover:bg-blue-800
            "onClick={toogleDarkMode} 
          >{darkMode ? "LHT" : 
          "DRK"}</button>
      </div>
    </div>
    </>
  )
}

export default App
