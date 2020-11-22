import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import ReviewContextProvider from "./contexts/reviewContext"

ReactDOM.render(
  <ReviewContextProvider>
    <App />
  </ReviewContextProvider>,
  document.getElementById("root")
)
