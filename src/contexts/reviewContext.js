import React, { useState, useEffect, createContext } from "react"
import reviews from "../review.json"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"

export const ReviewContext = createContext()

const ReviewContextProvider = (props) => {
    dayjs.extend(isBetween)
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

    const handleRatings = (starnum) => {
        const newStarNum = allReviews.filter(
            (review) => review.rating === starnum
        )
        setAllReviews(newStarNum)
    }

    const handleVersions = (vernum) => {
        const newVerNum = allReviews.filter(
            (review) => review.version === vernum
        )
        setAllReviews(newVerNum)
    }

    const handleCountries = (couname) => {
        const newCouName = allReviews.filter(
            (review) => review.countryName === couname
        )
        setAllReviews(newCouName)
    }

    const datePicker = (date1, date2) => {
        if (date1 !== null && date2 !== null) {
            const newReviews = allReviews.filter((review) =>
                dayjs(review.reviewDate).isBetween(date1, date2, null, "[]")
            )
            setAllReviews(newReviews)
        }
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
                handleRatings,
                handleVersions,
                handleCountries,
                datePicker,
            }}
        >
            {props.children}
        </ReviewContext.Provider>
    )
}

export default ReviewContextProvider
