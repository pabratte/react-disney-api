import { Link } from 'react-router-dom';

export default function SearchResultItem({result}) {
    return (
        <Link to={`/detail/${result._id}`} className="searchresultitem">
            <li key={result.id}>
                <img style={{backgroundImage:`url(${result.imageUrl})`}} />
                <p>{result.name}</p>    
            </li>
        </Link>
    )
}