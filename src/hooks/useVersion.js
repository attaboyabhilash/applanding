import { useState, useEffect } from "react"

function useVersion(versions) {
    const [zeroOne, setZeroOne] = useState(0)
    const [oneZero, setOneZero] = useState(0)
    const [oneZeroOne, setOneZeroOne] = useState(0)
    const [oneTwo, setOneTwo] = useState(0)
    const [oneTwoOne, setOneTwoOne] = useState(0)
    const [oneThree, setOneThree] = useState(0)

    const setVersions = () => {
        const v01 = versions.filter((rate) => rate === "v0.1")
        setZeroOne(v01.length)
        const v10 = versions.filter((rate) => rate === "v1.0")
        setOneZero(v10.length)
        const v101 = versions.filter((rate) => rate === "v1.0.1")
        setOneZeroOne(v101.length)
        const v12 = versions.filter((rate) => rate === "v1.2")
        setOneTwo(v12.length)
        const v121 = versions.filter((rate) => rate === "v1.2.1")
        setOneTwoOne(v121.length)
        const v13 = versions.filter((rate) => rate === "v1.3")
        setOneThree(v13.length)
    }

    useEffect(
        () => {
            setVersions()
        }, // eslint-disable-next-line
        [versions]
    )

    return {
        v01: zeroOne,
        v10: oneZero,
        v101: oneZeroOne,
        v12: oneTwo,
        v121: oneTwoOne,
        v13: oneThree,
    }
}

export default useVersion
