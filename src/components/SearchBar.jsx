import {useState} from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBar({onSearch, isLoading}) {
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <form className="searchbar" onSubmit={(e) => {e.preventDefault(); onSearch(searchTerm);}}>
            <input autoFocus onChange={(e) => setSearchTerm(e.target.value)}/>
            <button disabled={searchTerm.length < 3 || isLoading}><FaSearch /></button>
        </form>
    )
}