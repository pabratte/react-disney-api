import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterDetail from '../components/CharacterDetail';
import LoadingSpinner from '../components/LoadingSpinner';

export default function DetailPage () {
    const { id } = useParams();
    const [info, setInfo] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://api.disneyapi.dev/character/${id}`).then((response) => {
            setInfo(response.data.data);
            setIsLoading(false);
        })
    }, []);  
    
    return (
        <div>
            <h1>Character details</h1>
            <Link to="/">Back to search</Link>
            {isLoading?<LoadingSpinner/>:<CharacterDetail characterInfo={info}></CharacterDetail>}
            
            
        </div>
    )
}