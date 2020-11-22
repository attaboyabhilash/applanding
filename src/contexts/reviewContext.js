import React, { useState, useEffect, createContext } from "react"
import reviews from "../review.json"

export const ReviewContext = createContext()

const ReviewContextProvider = (props) => {
    const [allReviews, setAllReviews] = useState([])

    const selectReview = (reviewID) => {
        const selectedReview = reviews.filter(
            (reviews) => reviews.appID === reviewID
        )
        setAllReviews(selectedReview)
    }

    const sortReviewNew = () => {
        const newSort = allReviews.sort((a, b) => {
            return Date.parse(b.reviewDate) - Date.parse(a.reviewDate)
        })
        setAllReviews(newSort)
    }

    const sortReviewOld = () => {
        const newSort = allReviews.sort((a, b) => {
            return Date.parse(a.reviewDate) - Date.parse(b.reviewDate)
        })
        setAllReviews(newSort)
    }

    useEffect(() => {
        reviews.map((review) => {
            return setAllReviews((prevReview) => [...prevReview, review])
        })
    }, [])

    return (
        <ReviewContext.Provider
            value={{ allReviews, selectReview, sortReviewNew, sortReviewOld }}
        >
            {props.children}
        </ReviewContext.Provider>
    )
}

export default ReviewContextProvider
