import { Link } from 'react-router-dom';
import CharacterDetailSection from './CharacterDetailSection';
import { TbDeviceTvOld } from "react-icons/tb";
import { GrGamepad } from "react-icons/gr";
import { PiFilmSlate } from "react-icons/pi";

export default function CharacterDetail({ characterInfo }) {
    console.log(characterInfo);
    return (
        <div>
            <h3>{characterInfo.name}</h3>
            <img src={characterInfo.imageUrl} alt={characterInfo.name} />
            <Link to="/">Back to search</Link>
            {characterInfo.films.length > 0 && <CharacterDetailSection sectionName="Films" sectionIcon={<PiFilmSlate />} items={characterInfo.films}></CharacterDetailSection>}
            {characterInfo.tvShows.length > 0 && <CharacterDetailSection sectionName="TV Shows" sectionIcon={<TbDeviceTvOld />} items={characterInfo.tvShows}></CharacterDetailSection>}
            {characterInfo.videoGames.length > 0 && <CharacterDetailSection sectionName="Videogames" sectionIcon={<GrGamepad />} items={characterInfo.videoGames}></CharacterDetailSection>}
        </div>
    )
}