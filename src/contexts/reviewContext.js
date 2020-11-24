import React, { useState, useEffect, createContext } from "react"
import reviews from "../review.json"
import dayjs from "dayjs"
import isBetween from "dayjs/plugin/isBetween"
import Fuse from "fuse.js"

export const ReviewContext = createContext()

const ReviewContextProvider = (props) => {
    dayjs.extend(isBetween)
    const [allReviews, setAllReviews] = useState([])
    const [ratings, setRatings] = useState([])
    const [versions, setVersions] = useState([])
    const [countries, setCountries] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

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
            const newReviews = reviews.filter((review) =>
                dayjs(review.reviewDate).isBetween(date1, date2, null, "[]")
            )
            setAllReviews(newReviews)
        } else {
            const firstBatchReviews = reviews
                .sort((a, b) => {
                    return Date.parse(b.reviewDate) - Date.parse(a.reviewDate)
                })
                .map((review) => review)
            setAllReviews(firstBatchReviews)
        }
    }

    useEffect(() => {
        const stars = allReviews.map((review) => review.rating)
        setRatings(stars)
        const versions = allReviews.map((review) => review.version)
        setVersions(versions)
        const country = allReviews.map((review) => review.countryName)
        setCountries(country)
    }, [allReviews])

    useEffect(
        () => {
            const fuse = new Fuse(reviews, {
                keys: [
                    "appID",
                    "appStoreName",
                    "rating",
                    "version",
                    "countryName",
                    "reviewHeading",
                    "reviewText",
                    "reviewUserName",
                ],
            })
            const query = fuse.search(searchTerm)
            const searchResults = searchTerm
                ? query.map((review) => review.item)
                : reviews
            setAllReviews(searchResults)
        }, // eslint-disable-next-line
        [searchTerm]
    )

    useEffect(() => {
        const firstBatchReviews = reviews
            .sort((a, b) => {
                return Date.parse(b.reviewDate) - Date.parse(a.reviewDate)
            })
            .map((review) => review)
        setAllReviews(firstBatchReviews)
    }, [])

    return (
        <ReviewContext.Provider
            value={{
                allReviews,
                ratings,
                versions,
                countries,
                setSearchTerm,
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
