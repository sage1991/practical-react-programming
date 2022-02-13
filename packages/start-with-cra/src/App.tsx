import React from "react"

import { FlutterSmallIcon, FlutterLargeIcon } from "./assets"
import { TodoList } from "./components"

import "./App.css"

console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_API)

function App() {
  return (
    <div className="App">
      <img src={FlutterSmallIcon} alt="flutter" />
      <img src={FlutterLargeIcon} alt="flutter" />
      <TodoList />
    </div>
  )
}

export default App
