import Google from "../assets/google.png"
import Amazon from "../assets/amazon.svg"
import Flipkart from "../assets/flipkart.png"
import Myntra from "../assets/myntra.png"
import { FaBoxOpen } from "react-icons/fa"

const products = (prod) => {
    switch (prod) {
        case "com.google":
            return <img src={Google} alt="google" className="google" />
        case "com.amazon":
            return <img src={Amazon} alt="amazon" className="amazon" />
        case "com.flipkart":
            return <img src={Flipkart} alt="flipkart" className="flipkart" />
        case "com.myntra":
            return <img src={Myntra} alt="myntra" className="myntra" />
        default:
            return (
                <div className="box-open">
                    <FaBoxOpen />
                </div>
            )
    }
}

export default products
