import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function ImdbRating({rating}) {
  return <p className="text-gray-500"><FontAwesomeIcon icon={faStar} className="text-yellow-400" /> {rating}/10 IMDB</p>
}
