import { Link } from "react-router-dom";

function Marvel({id, name, thumbnail}) {
    return (
        <li>
            <div>
                <Link to={`/detail/${id}`}>
                    <img src={thumbnail} alt={name} className={thumbnail.includes('image_not_available') ? 'left' : ''} />
                    <span>{name}</span>
                </Link>
            </div>
        </li>
    )
}
export default Marvel;