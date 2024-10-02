import SearchBar from "../components/SearchBar"
import LoadingSpinner from "../components/LoadingSpinner"
import SearchResults from "../components/SearchResults";
import axios from "axios";
import { useState } from "react";

export default function SearchPage() {
    const [isLoading, setIslLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    

    function onSearch(searchTerm) {
        setIslLoading(true);
        axios.get(`https://api.disneyapi.dev/character?name=${searchTerm}`)
        .then(function (response) {
            setIslLoading(false);
            setSearchResults(response.data.data);
          })
    }

    return (
        <>
        <SearchBar onSearch={onSearch}></SearchBar>
        {isLoading?<LoadingSpinner/>:<SearchResults results={searchResults}></SearchResults>}
        </>
    )

}