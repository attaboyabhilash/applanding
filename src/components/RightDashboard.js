import React, { useState, useEffect, useContext } from "react"
import { ReviewContext } from "../contexts/reviewContext"
import { v4 as uuidv4 } from "uuid"
import ReviewCard from "./ReviewCard"
import { RiArrowDownSFill, RiBracesLine } from "react-icons/ri"
import { FaBell, FaDownload, FaChromecast } from "react-icons/fa"
import { Pagination } from "antd"

function RightDashboard() {
    const [localReviews, setLocalReviews] = useState([])
    const [pageLimit, setPageLimit] = useState(10)
    const { allReviews } = useContext(ReviewContext)

    useEffect(() => {
        const newReview = allReviews.map((review) => review)
        setLocalReviews(newReview)
        setPageLimit(10)
    }, [allReviews])

    const handlePageChange = (page) => {
        setPageLimit(page * 10)
    }

    return (
        <div className="right-dash">
            <div className="right-top">
                <div className="page-value">
                    <p>
                        Viewing {pageLimit - 9}-{pageLimit} of{" "}
                        {localReviews.length} Reviews
                    </p>
                </div>
                <div className="right-top-icons">
                    <div className="alert">
                        <FaBell />
                        <small>Create Alert</small>
                        <RiArrowDownSFill />
                    </div>
                    <div className="download">
                        <FaChromecast />
                        <RiBracesLine />
                        <FaDownload />
                    </div>
                </div>
            </div>
            {localReviews.slice(pageLimit - 10, pageLimit).map((review) => {
                return <ReviewCard key={uuidv4()} review={review} />
            })}
            <div className="pagination">
                <Pagination
                    showSizeChanger={false}
                    defaultCurrent={1}
                    total={localReviews.length}
                    onChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default RightDashboard
