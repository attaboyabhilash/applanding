import React, { useState, useEffect, useContext } from "react"
import { ReviewContext } from "../contexts/reviewContext"
// Ant Design
import { Input } from "antd"
import { DatePicker, Space } from "antd"

//  React Icons
import { AiOutlineSearch } from "react-icons/ai"
import { RiArrowDownSFill } from "react-icons/ri"
import { ImMenu2 } from "react-icons/im"

// lists
import Rating from "./Rating"
import Version from "./Version"
import Country from "./Country"

function LeftDashboard() {
    const initialPosition = window.innerWidth > 800 ? true : false
    const { RangePicker } = DatePicker
    const [slide, setSlide] = useState(initialPosition)
    const [rating, setRating] = useState(true)
    const [version, setVersion] = useState(true)
    const [country, setCountry] = useState(true)

    const { datePicker, setSearchTerm } = useContext(ReviewContext)

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

    const handleDateSearch = (value) => {
        const date1 = value && value[0]._d
        const date2 = value && value[1]._d
        datePicker(date1, date2)
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    }

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
                onChange={handleChange}
            />
            <Space direction="vertical" size={12} className="calender">
                <RangePicker onChange={handleDateSearch} />
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
                <Rating />
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
                <Version />
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
                <Country />
            </div>
        </div>
    )
}

export default LeftDashboard
