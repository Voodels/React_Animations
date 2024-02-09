import Navbar from "./components/Navbar"
import { useState } from "react"

function App() {
  const [darkMode, setdarkMode] = useState(false)
  const toogleDarkMode = ()=>{
    setdarkMode(!darkMode)
  }
  return (
    

    <div className={` ${darkMode && "dark"}
    h-screen w-[100%]
    bg-white
    dark:bg-black
`}>
      {/* <div className=" w-full h-screen bg-DMC">
        <Navbar/>

      </div> */}
      
      <div className={`card + ${darkMode && "dark"}


      `}>
          {console.log(darkMode)}

        <div class=" mx-auto py-[300px]  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
          <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white  bg-green-400 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-300 
          dark:hover:bg-blue-800 ">
            Read more
            <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
        </div>
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


    </div>
  )
}

export default App
