import Flag from "react-world-flags"

const flags = (country) => {
    switch (country) {
        case "United States":
            return <Flag code="US" className="c-flag" />
        case "United Kingdom":
            return <Flag code="GB" className="c-flag" />
        case "Germany":
            return <Flag code="DE" className="c-flag" />
        case "India":
            return <Flag code="IN" className="c-flag" />
        case "Japan":
            return (
                <Flag
                    code="JP"
                    className="c-flag"
                    style={{ border: "0.1px solid #AAA" }}
                />
            )
        case "Russia":
            return <Flag code="RU" className="c-flag" />
        case "Australia":
            return <Flag code="AU" className="c-flag" />
        case "France":
            return <Flag code="FR" className="c-flag" />
        default:
            return <Flag code="CA" className="c-flag" />
    }
}

export default flags
