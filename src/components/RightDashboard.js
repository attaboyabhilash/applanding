import React from "react"
import Reviews from "../review.json"
import { Card } from "antd"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import flags from '../helpers/flags'
import stars from '../helpers/stars'
import products from '../helpers/products'

function RightDashboard() {
  dayjs.extend(relativeTime)

  return (
    <div className="right-dash">
      {Reviews.map(review => {
        return (
          <Card key={review.id} hoverable style={{ marginBottom: "20px" }}>
            <div className="card-title">
              <div className="appID">{products(review.appID)}</div>
              <div className="appStoreName">{review.appStoreName}</div>
              <div className="reviewHeading">
                <h2>{review.reviewHeading}</h2>
              </div>
              <div className="rating">
                {stars(review.rating)}
              </div>
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
      })}
    </div>
  )
}

export default RightDashboard
