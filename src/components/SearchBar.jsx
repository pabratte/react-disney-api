import {useState} from "react";

export default function SearchBar({onSearch}) {
    const [searchTerm, setSearchTerm] = useState("");

    return(
        <form className="searchbar" onSubmit={(e) => {e.preventDefault(); onSearch(searchTerm);}}>
            <input onChange={(e) => setSearchTerm(e.target.value)}/>
            <button>Buscar</button>
        </form>
    )
}