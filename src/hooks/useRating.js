import { useState, useEffect } from "react"

function useRating(ratings) {
    const [starOne, setStarOne] = useState(0)
    const [starTwo, setStarTwo] = useState(0)
    const [starThree, setStarThree] = useState(0)
    const [starFour, setStarFour] = useState(0)
    const [starFive, setStarFive] = useState(0)

    const setStars = () => {
        const one = ratings.filter((rate) => rate === "1")
        setStarOne(one.length)
        const two = ratings.filter((rate) => rate === "2")
        setStarTwo(two.length)
        const three = ratings.filter((rate) => rate === "3")
        setStarThree(three.length)
        const four = ratings.filter((rate) => rate === "4")
        setStarFour(four.length)
        const five = ratings.filter((rate) => rate === "5")
        setStarFive(five.length)
    }

    useEffect(
        () => {
            setStars()
        }, // eslint-disable-next-line
        [ratings]
    )

    return {
        one: starOne,
        two: starTwo,
        three: starThree,
        four: starFour,
        five: starFive,
    }
}

export default useRating
