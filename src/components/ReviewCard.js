import React from "react"
import { Card } from "antd"
import flags from "../helpers/flags"
import stars from "../helpers/stars"
import products from "../helpers/products"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

function ReviewCard({ review }) {
    dayjs.extend(relativeTime)
    return (
        <Card hoverable style={{ marginTop: "20px", marginBottom: "20px" }}>
            <div className="card-title">
                <div>
                    <h4>{review.id}</h4>
                </div>
                <div className="appID">{products(review.appID)}</div>
                <div className="appStoreName">{review.appStoreName}</div>
                <div className="reviewHeading">
                    <h2>{review.reviewHeading}</h2>
                </div>
                <div className="rating">{stars(review.rating)}</div>
            </div>
            <div className="card-description">
                <p>{review.reviewText}</p>
            </div>
            <div className="card-footer">
                <small>by {review.reviewUserName}</small>
                <small>{dayjs(review.reviewDate).fromNow()}</small>
                <small>{review.version}</small>
                <small>
                    {flags(review.countryName)}
                    {review.countryName}
                </small>
            </div>
        </Card>
    )
}

export default ReviewCard
