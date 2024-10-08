import SearchResultItem from "./SearchResultItem"

export default function SearchResults({results}) {
    return (
        <div className="searchresults">
            {results?
                results.length === 0?
                    <div>No results found</div>:
                    <ul>
                        {results.map((result) => {
                                return <SearchResultItem key={result.id} result={result}></SearchResultItem>
                        })}
                    </ul>
                :<></>
            }
        </div>
    )
}