import React from "react"
import { Header, LeftDashboard, RightDashboard } from "../components"

const Home = () => {
  return (
    <div>
      <Header />
      <div className="dashboards">
        <LeftDashboard />
        <RightDashboard />
      </div>
    </div>
  )
}

export default Home
