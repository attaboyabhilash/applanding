import React, { useContext } from "react"
import useCountry from "../hooks/useCountry"
import { ReviewContext } from "../contexts/reviewContext"
import flags from "../helpers/flags"

function Country() {
    const { countries, handleCountries } = useContext(ReviewContext)
    const { us, uk, ind, jp, de, au, fr, ru } = useCountry(countries)

    return (
        <ul>
            {us !== 0 && (
                <li onClick={() => handleCountries("United States")}>
                    <div>{flags("United States")}United States</div>
                    <p>{us}</p>
                </li>
            )}
            {uk !== 0 && (
                <li onClick={() => handleCountries("United Kingdom")}>
                    <div>{flags("United Kingdom")}United Kingdom</div>
                    <p>{uk}</p>
                </li>
            )}
            {ind !== 0 && (
                <li onClick={() => handleCountries("India")}>
                    <div>{flags("India")}India</div>
                    <p>{ind}</p>
                </li>
            )}
            {de !== 0 && (
                <li onClick={() => handleCountries("Germany")}>
                    <div>{flags("Germany")}Germany</div>
                    <p>{de}</p>
                </li>
            )}
            {jp !== 0 && (
                <li onClick={() => handleCountries("Japan")}>
                    <div>{flags("Japan")}Japan</div>
                    <p>{jp}</p>
                </li>
            )}
            {fr !== 0 && (
                <li onClick={() => handleCountries("France")}>
                    <div>{flags("France")}France</div>
                    <p>{fr}</p>
                </li>
            )}
            {au !== 0 && (
                <li onClick={() => handleCountries("Australia")}>
                    <div>{flags("Australia")}Australia</div>
                    <p>{au}</p>
                </li>
            )}
            {ru !== 0 && (
                <li onClick={() => handleCountries("Russia")}>
                    <div>{flags("Russia")}Russia</div>
                    <p>{ru}</p>
                </li>
            )}
        </ul>
    )
}

export default Country
