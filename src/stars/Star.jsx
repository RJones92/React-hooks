import { FaStar } from "react-icons/fa"

function Star({ selected, onSelect }) {
    return <FaStar 
    color={selected ? "red" : "grey"}
    onClick={onSelect} />;
}

export default Star;