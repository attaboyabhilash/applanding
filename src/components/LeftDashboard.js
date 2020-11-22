import React, { useState, useEffect } from "react"
// Ant Design
import { Input } from "antd"
import { DatePicker, Space } from "antd"

//  React Icons
import { AiOutlineSearch } from "react-icons/ai"
import { RiArrowDownSFill } from "react-icons/ri"
import { ImMenu2 } from "react-icons/im"

// helpers
import stars from "../helpers/stars"

function LeftDashboard() {
    const { RangePicker } = DatePicker
    const [slide, setSlide] = useState(true)
    const [rating, setRating] = useState(true)
    const [version, setVersion] = useState(true)
    const [country, setCountry] = useState(true)

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 800) {
                setSlide(false)
            } else {
                setSlide(true)
            }
        }
        window.addEventListener("resize", handleResize)
    })

    return (
        <div
            className="left-dash"
            style={
                slide
                    ? { transform: "translateX(0px)" }
                    : { transform: "translateX(-250px)" }
            }
        >
            <ImMenu2
                className="menu-bar"
                onClick={() => setSlide((prevSlide) => !prevSlide)}
            />
            <Input
                placeholder="Search..."
                prefix={<AiOutlineSearch className="search" />}
            />
            <Space direction="vertical" size={12} className="calender">
                <RangePicker />
            </Space>
            <div
                className="text-holder"
                onClick={() => setRating((prevRate) => !prevRate)}
            >
                Filter By Rating
                <RiArrowDownSFill
                    className="text-holder-icon"
                    style={rating && { transform: "rotate(0deg)" }}
                />
            </div>
            <div
                className="drop-down-list"
                style={rating ? { display: "block" } : { display: "none" }}
            >
                <ul>
                    <li>{stars(5)}</li>
                    <li>{stars(4)}</li>
                    <li>{stars(3)}</li>
                    <li>{stars(2)}</li>
                    <li>{stars(1)}</li>
                </ul>
            </div>
            <div
                className="text-holder"
                onClick={() => setVersion((prevRate) => !prevRate)}
            >
                Filter By Version
                <RiArrowDownSFill
                    className="text-holder-icon"
                    style={version && { transform: "rotate(0deg)" }}
                />
            </div>
            <div
                className="drop-down-list"
                style={version ? { display: "block" } : { display: "none" }}
            >
                <ul>
                    <li>1.2.0</li>
                    <li>1.1.4</li>
                    <li>1.1.2</li>
                    <li>1.1.0</li>
                    <li>1.0</li>
                </ul>
            </div>
            <div
                className="text-holder"
                onClick={() => setCountry((prevRate) => !prevRate)}
            >
                Filter By Country
                <RiArrowDownSFill
                    className="text-holder-icon"
                    style={country && { transform: "rotate(0deg)" }}
                />
            </div>
            <div
                className="drop-down-list"
                style={country ? { display: "block" } : { display: "none" }}
            >
                <ul>
                    <li>United States</li>
                    <li>United Kingdom</li>
                    <li>Germany</li>
                    <li>Japan</li>
                    <li>India</li>
                </ul>
            </div>
        </div>
    )
}

export default LeftDashboard
