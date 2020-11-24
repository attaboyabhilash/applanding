import React, { useContext } from "react"
import useVersion from "../hooks/useVersion"
import { ReviewContext } from "../contexts/reviewContext"

function Version() {
    const { versions, handleVersions } = useContext(ReviewContext)
    const { v01, v10, v101, v12, v121, v13 } = useVersion(versions)

    return (
        <ul>
            {v13 !== 0 && (
                <li onClick={() => handleVersions("v1.3")}>
                    v1.3<p>{v13}</p>
                </li>
            )}
            {v121 !== 0 && (
                <li onClick={() => handleVersions("v1.2.1")}>
                    v1.2.1<p>{v121}</p>
                </li>
            )}
            {v12 !== 0 && (
                <li onClick={() => handleVersions("v1.2")}>
                    v1.2<p>{v12}</p>
                </li>
            )}
            {v101 !== 0 && (
                <li onClick={() => handleVersions("v1.0.1")}>
                    v1.0.1<p>{v101}</p>
                </li>
            )}
            {v10 !== 0 && (
                <li onClick={() => handleVersions("v1.0")}>
                    v1.0<p>{v10}</p>
                </li>
            )}
            {v01 !== 0 && (
                <li onClick={() => handleVersions("v0.1")}>
                    v0.1<p>{v01}</p>
                </li>
            )}
        </ul>
    )
}

export default Version
