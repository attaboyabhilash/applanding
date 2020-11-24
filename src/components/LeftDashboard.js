import React, { useState, useEffect, useContext } from "react"
import { ReviewContext } from "../contexts/reviewContext"
import useRating from "../hooks/useRating"
import useVersion from "../hooks/useVersion"
import useCountry from "../hooks/useCountry"
// Ant Design
import { Input } from "antd"
import { DatePicker, Space } from "antd"

//  React Icons
import { AiOutlineSearch } from "react-icons/ai"
import { RiArrowDownSFill } from "react-icons/ri"
import { ImMenu2 } from "react-icons/im"

// helpers
import stars from "../helpers/stars"
import flags from "../helpers/flags"

function LeftDashboard() {
    const { RangePicker } = DatePicker
    const [slide, setSlide] = useState(true)
    const [rating, setRating] = useState(true)
    const [version, setVersion] = useState(true)
    const [country, setCountry] = useState(true)

    const {
        ratings,
        versions,
        countries,
        handleRatings,
        handleVersions,
        handleCountries,
        datePicker,
        setSearchTerm,
    } = useContext(ReviewContext)

    const { one, two, three, four, five } = useRating(ratings)

    const { us, uk, ind, jp, de, au, fr, ru } = useCountry(countries)

    const { v01, v10, v101, v12, v121, v13 } = useVersion(versions)

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

    const handleRating = (starAmount) => {
        handleRatings(starAmount)
    }

    const handleVersion = (versionValue) => {
        handleVersions(versionValue)
    }

    const handleCountry = (countryCode) => {
        handleCountries(countryCode)
    }

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
                <ul>
                    {five !== 0 && (
                        <li onClick={() => handleRating("5")}>
                            <div className="star-bar">
                                {stars(5)}
                                <span
                                    style={{
                                        width: `${five / 10}%`,
                                    }}
                                ></span>
                            </div>
                            <p>{five}</p>
                        </li>
                    )}
                    {four !== 0 && (
                        <li onClick={() => handleRating("4")}>
                            <div className="star-bar">
                                {stars(4)}
                                <span
                                    style={{
                                        width: `${four / 10}%`,
                                    }}
                                ></span>
                            </div>
                            <p>{four}</p>
                        </li>
                    )}
                    {three !== 0 && (
                        <li onClick={() => handleRating("3")}>
                            <div className="star-bar">
                                {stars(3)}
                                <span
                                    style={{
                                        width: `${three / 10}%`,
                                    }}
                                ></span>
                            </div>
                            <p>{three}</p>
                        </li>
                    )}
                    {two !== 0 && (
                        <li onClick={() => handleRating("2")}>
                            <div className="star-bar">
                                {stars(2)}
                                <span
                                    style={{
                                        width: `${two / 10}%`,
                                    }}
                                ></span>
                            </div>
                            <p>{two}</p>
                        </li>
                    )}
                    {one !== 0 && (
                        <li onClick={() => handleRating("1")}>
                            <div className="star-bar">
                                {stars(1)}
                                <span
                                    style={{
                                        width: `${one / 10}%`,
                                    }}
                                ></span>
                            </div>
                            <p>{one}</p>
                        </li>
                    )}
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
                    {v13 !== 0 && (
                        <li onClick={() => handleVersion("v1.3")}>
                            v1.3<p>{v13}</p>
                        </li>
                    )}
                    {v121 !== 0 && (
                        <li onClick={() => handleVersion("v1.2.1")}>
                            v1.2.1<p>{v121}</p>
                        </li>
                    )}
                    {v12 !== 0 && (
                        <li onClick={() => handleVersion("v1.2")}>
                            v1.2<p>{v12}</p>
                        </li>
                    )}
                    {v101 !== 0 && (
                        <li onClick={() => handleVersion("v1.0.1")}>
                            v1.0.1<p>{v101}</p>
                        </li>
                    )}
                    {v10 !== 0 && (
                        <li onClick={() => handleVersion("v1.0")}>
                            v1.0<p>{v10}</p>
                        </li>
                    )}
                    {v01 !== 0 && (
                        <li onClick={() => handleVersion("v0.1")}>
                            v0.1<p>{v01}</p>
                        </li>
                    )}
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
                    {us !== 0 && (
                        <li onClick={() => handleCountry("United States")}>
                            <div>{flags("United States")}United States</div>
                            <p>{us}</p>
                        </li>
                    )}
                    {uk !== 0 && (
                        <li onClick={() => handleCountry("United Kingdom")}>
                            <div>{flags("United Kingdom")}United Kingdom</div>
                            <p>{uk}</p>
                        </li>
                    )}
                    {ind !== 0 && (
                        <li onClick={() => handleCountry("India")}>
                            <div>{flags("India")}India</div>
                            <p>{ind}</p>
                        </li>
                    )}
                    {de !== 0 && (
                        <li onClick={() => handleCountry("Germany")}>
                            <div>{flags("Germany")}Germany</div>
                            <p>{de}</p>
                        </li>
                    )}
                    {jp !== 0 && (
                        <li onClick={() => handleCountry("Japan")}>
                            <div>{flags("Japan")}Japan</div>
                            <p>{jp}</p>
                        </li>
                    )}
                    {fr !== 0 && (
                        <li onClick={() => handleCountry("France")}>
                            <div>{flags("France")}France</div>
                            <p>{fr}</p>
                        </li>
                    )}
                    {au !== 0 && (
                        <li onClick={() => handleCountry("Australia")}>
                            <div>{flags("Australia")}Australia</div>
                            <p>{au}</p>
                        </li>
                    )}
                    {ru !== 0 && (
                        <li onClick={() => handleCountry("Russia")}>
                            <div>{flags("Russia")}Russia</div>
                            <p>{ru}</p>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default LeftDashboard
