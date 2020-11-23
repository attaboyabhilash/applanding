import { useState, useEffect } from "react"

function useCountry(countries) {
    const [countryUS, setCountryUS] = useState(0)
    const [countryUK, setCountryUK] = useState(0)
    const [countryIN, setCountryIN] = useState(0)
    const [countryJP, setCountryJP] = useState(0)
    const [countryDE, setCountryDE] = useState(0)
    const [countryAU, setCountryAU] = useState(0)
    const [countryFR, setCountryFR] = useState(0)
    const [countryRU, setCountryRU] = useState(0)

    const setCountries = () => {
        const us = countries.filter((country) => country === "United States")
        setCountryUS(us.length)
        const uk = countries.filter((country) => country === "United Kingdom")
        setCountryUK(uk.length)
        const ind = countries.filter((country) => country === "India")
        setCountryIN(ind.length)
        const jp = countries.filter((country) => country === "Japan")
        setCountryJP(jp.length)
        const de = countries.filter((country) => country === "Germany")
        setCountryDE(de.length)
        const au = countries.filter((country) => country === "Australia")
        setCountryAU(au.length)
        const fr = countries.filter((country) => country === "France")
        setCountryFR(fr.length)
        const ru = countries.filter((country) => country === "Russia")
        setCountryRU(ru.length)
    }

    useEffect(
        () => {
            setCountries()
        }, // eslint-disable-next-line
        [countries]
    )

    return {
        us: countryUS,
        uk: countryUK,
        ind: countryIN,
        jp: countryJP,
        de: countryDE,
        au: countryAU,
        fr: countryFR,
        ru: countryRU,
    }
}

export default useCountry
