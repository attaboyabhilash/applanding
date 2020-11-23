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

    const { ratings, versions, countries } = useContext(ReviewContext)

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
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
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
                    <li>
                        v1.3<p>{v13}</p>
                    </li>
                    <li>
                        v1.2.1<p>{v121}</p>
                    </li>
                    <li>
                        v1.2<p>{v12}</p>
                    </li>
                    <li>
                        v1.0.1<p>{v101}</p>
                    </li>
                    <li>
                        v1.0<p>{v10}</p>
                    </li>
                    <li>
                        v0.1<p>{v01}</p>
                    </li>
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
                    <li>
                        <div>{flags("United States")}United States</div>
                        <p>{us}</p>
                    </li>
                    <li>
                        <div>{flags("United Kingdom")}United Kingdom</div>
                        <p>{uk}</p>
                    </li>
                    <li>
                        <div>{flags("India")}India</div>
                        <p>{ind}</p>
                    </li>
                    <li>
                        <div>{flags("Germany")}Germany</div>
                        <p>{de}</p>
                    </li>
                    <li>
                        <div>{flags("Japan")}Japan</div>
                        <p>{jp}</p>
                    </li>
                    <li>
                        <div>{flags("France")}France</div>
                        <p>{fr}</p>
                    </li>
                    <li>
                        <div>{flags("Australia")}Australia</div>
                        <p>{au}</p>
                    </li>
                    <li>
                        <div>{flags("Russia")}Russia</div>
                        <p>{ru}</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default LeftDashboard
