import React, { useContext } from "react"
import useRating from "../hooks/useRating"
import { ReviewContext } from "../contexts/reviewContext"
import stars from "../helpers/stars"

function Rating() {
    const { ratings, handleRatings } = useContext(ReviewContext)
    const { one, two, three, four, five } = useRating(ratings)

    return (
        <ul>
            {five !== 0 && (
                <li onClick={() => handleRatings("5")}>
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
                <li onClick={() => handleRatings("4")}>
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
                <li onClick={() => handleRatings("3")}>
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
                <li onClick={() => handleRatings("2")}>
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
                <li onClick={() => handleRatings("1")}>
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
    )
}

export default Rating
