export default function CharacterDetail({ characterInfo }) {
    return (
        <div>
            <h2>{characterInfo.name}</h2>
            <img src={characterInfo.imageUrl} alt={characterInfo.name} />
            <h3>Films</h3>
            <ul>
                {characterInfo.films.map((film) => (
                    <li key={film}>{film}</li>
                ))}
            </ul>
            <h3>TV Shows</h3>
            <ul>
                {characterInfo.tvShows.map((tvShow) => (
                    <li key={tvShow}>{tvShow}</li>
                ))}
            </ul>
            <h3>Videogames</h3>
            <ul>
                {characterInfo.videoGames.map((videoGame) => (
                    <li key={videoGame}>{videoGame}</li>
                ))}
            </ul>
        </div>
    )
}