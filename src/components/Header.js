import React from "react"
import { Select } from "antd"

function Header() {
  const { Option } = Select

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

  return (
    <div className="header">
      <div className="select-product">
        <label htmlFor="dropdown">Select Product</label>
        <Select
          defaultValue="my app"
          style={{ width: "100%" }}
          onChange={handleChange}
        >
          <Option value="my app">My App</Option>
          <Option value="your app">Your App</Option>
          <Option value="this app">This App</Option>
          <Option value="not your app">Not Your App</Option>
        </Select>
      </div>
      <div className="sorting-translate">
        <div className="sorting">
          <label>Sorting</label>
          <Select
            size="small"
            defaultValue="newest"
            style={{ width: "100%" }}
            onChange={handleChange}
          >
            <Option value="newest">Newest First</Option>
            <Option value="oldest">Oldest First</Option>
          </Select>
        </div>
        <div className="translate">
          <label>Translation</label>
          <Select size="small" defaultValue="english" style={{ width: "100%" }}>
            <Option value="english">English</Option>
            <Option value="hindi">Hindi</Option>
          </Select>
        </div>
      </div>
    </div>
  )
}

export default Header
