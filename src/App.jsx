import icon32 from '/icon32.png'
import './App.css'
import { useState } from 'react'

function App() {

  const [colour, setColour] = useState("")

  const onclick = async () =>{
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
      target: {tabId: tab.id },
      args: [colour],
      func: (colour)=>{
        document.body.style.backgroundColor = colour;
      }
    })
  }

  return (
    <>
      <div>
        <a href="https://codewithbalaji.vercel.app/" target="_blank">
          <img src={icon32} className="logo react" alt="Color Changer logo" />
        </a>
       
      </div>
      <h1>Color Changer</h1>
      <div className="card">
        <input type="color" onChange={(e)=> setColour(e.currentTarget.value)} value={colour} />
        <button onClick={onclick}>
          Click me
        </button>
        <p>
          Build for testing purposes only!!
        </p>
      </div>
      <p className="footer">
        Developed by codewithbalaji
      </p>
    </>
  )
}

export default App
