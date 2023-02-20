import React from 'react'
import Final from "./components/Final"
const App = () => {
  console.log("app.js")
localStorage.removeItem("userEmail");
  return (
    <div>
      <Final/>
    </div>
  )
}

export default App