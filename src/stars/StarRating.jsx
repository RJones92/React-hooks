import { useState } from "react";
import Star from "./Star";

const createArray = (length) => [...Array(length)];

function StarRating({ totalStars }) {
    const [selectedStars, setselectedStars] = useState(0);

    let array = [...Array(totalStars)];

    return (
        <div>
            {
                array.map((n, i) =>
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => setselectedStars(i + 1)} />
                )
            }
            <p>{selectedStars} of {totalStars}</p>
        </div>
    );
}

export default StarRating;