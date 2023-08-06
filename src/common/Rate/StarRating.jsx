import { useState, useEffect } from "react";
const StarRating = ({ disabled, rate }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    useEffect(() => {
        if (rate) {
            setRating(Number(rate))
        }
    }, [rate]);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index += 1;
                return (
                    <button
                        type="button"
                        disabled ={disabled}
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => disabled ? null : setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                    >
                        <span className="star">&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};
export default StarRating