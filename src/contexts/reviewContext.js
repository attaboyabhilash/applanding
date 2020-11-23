import React, { useState, useEffect, createContext } from "react"
import reviews from "../review.json"

export const ReviewContext = createContext()

const ReviewContextProvider = (props) => {
    const [allReviews, setAllReviews] = useState([])
    const [ratings, setRatings] = useState([])
    const [versions, setVersions] = useState([])
    const [countries, setCountries] = useState([])

    const selectReview = (reviewID) => {
        let selectedReview = []
        if (reviewID === "allProducts") {
            selectedReview = reviews
                .sort((a, b) => {
                    return Date.parse(b.reviewDate) - Date.parse(a.reviewDate)
                })
                .map((review) => review)
        } else {
            selectedReview = reviews.filter(
                (reviews) => reviews.appID === reviewID
            )
        }
        setAllReviews(selectedReview)
    }

    const sortReviewNew = () => {
        const sortedReviews = allReviews
            .sort((a, b) => {
                return Date.parse(b.reviewDate) - Date.parse(a.reviewDate)
            })
            .map((review) => review)
        setAllReviews(sortedReviews)
    }

    const sortReviewOld = () => {
        const sortedReviews = allReviews
            .sort((a, b) => {
                return Date.parse(a.reviewDate) - Date.parse(b.reviewDate)
            })
            .map((review) => review)
        setAllReviews(sortedReviews)
    }

    useEffect(() => {
        const stars = allReviews.map((review) => review.rating)
        setRatings(stars)
    }, [allReviews])

    useEffect(() => {
        const versions = allReviews.map((review) => review.version)
        setVersions(versions)
    }, [allReviews])

    useEffect(() => {
        const country = allReviews.map((review) => review.countryName)
        setCountries(country)
    }, [allReviews])

    useEffect(() => {
        reviews
            .sort((a, b) => {
                return Date.parse(b.reviewDate) - Date.parse(a.reviewDate)
            })
            .map((review) => {
                return setAllReviews((prevReview) => [...prevReview, review])
            })
    }, [])

    return (
        <ReviewContext.Provider
            value={{
                allReviews,
                ratings,
                versions,
                countries,
                selectReview,
                sortReviewNew,
                sortReviewOld,
            }}
        >
            {props.children}
        </ReviewContext.Provider>
    )
}

export default ReviewContextProvider
