import React, { useState, createContext } from "react"

export const ReviewContext = createContext()

const ReviewContextProvider = props => {
  const [app, setApp] = useState()

  const selectApp = app => {
    setApp(app)
  }
  return (
    <ReviewContext.Provider value={{ app, selectApp }}>
      {props.children}
    </ReviewContext.Provider>
  )
}

export default ReviewContextProvider
