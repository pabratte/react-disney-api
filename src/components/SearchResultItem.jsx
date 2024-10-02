export default function SearchResultItem({result}) {
    return (
        <a href={`/detail/${result._id}`}>
            <li className="searchresultitem" key={result.id}>
                <div className="searchresultitem__image" style={{backgroundImage:`url(${result.imageUrl})`}}>
                </div>
                {result.name}    
            </li>
        </a>
    )
}