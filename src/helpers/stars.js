import { AiFillStar } from "react-icons/ai"

const stars = (number) => {
    switch(Number(number)){
        case 1:
            return (
                <div className="stars">
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                </div>
            )
        case 2:
            return (
                <div className="stars">
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                </div>
            )
        case 3:
            return (
                <div className="stars">
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                </div>
            )
        case 4:
            return (
                <div className="stars">
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon" />
                </div>
            )
        case 5:
            return (
                <div className="stars">
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                    <AiFillStar className="star-icon-filled" />
                </div>
            )
        default: 
            return (
                <div className="stars">
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                    <AiFillStar className="star-icon" />
                </div>
            )
    }
}

export default stars