import Google from '../assets/google.png'
import Amazon from '../assets/amazon.svg'
import Flipkart from '../assets/flipkart.png'
import Myntra from '../assets/myntra.png'

const products = (prod) => {
    switch(prod){
        case "com.google":
            return <img src={Google} alt="google" className="google" />
        case "com.amazon":
            return <img src={Amazon} alt="amazon" className="amazon" />
        case "com.flipkart":
            return <img src={Flipkart} alt="flipkart" className="flipkart" />
        case "com.myntra":
            return <img src={Myntra} alt="myntra" className="myntra" />
        default:
            return 0
    }
}

export default products