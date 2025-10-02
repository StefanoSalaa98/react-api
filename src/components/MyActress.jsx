const MyActress = (props) => {

    const { actress } = props

    function famousFilms(films) {
        return (
            <ul>
                {films.map(film => (
                    <li>{film}</li>
                ))}
            </ul>
        )
    }

    return (
        <>
            <h2>{actress.name}</h2>
            <span><strong>BIRT YEAR:</strong> {actress.birth_year}</span>
            {/* se è presente, stampo anche l'anno di morte dell'attrice */}
            {actress.death_year && <span><strong>DEATH YEAR:</strong> {actress.death_year}</span>}
            <span><strong>NATIONALITY:</strong> {actress.nationality}</span>
            <span><strong>BIOGRAPHY: </strong>{actress.biography}</span>
            <span><strong>AWARDS: </strong>{actress.awards}</span>
            {/* se è presente il campo most_famous_movies stampo la lista dei loro film famosi */}
            {actress.most_famous_movies && <span><strong>MOST FAMOUS FILMS:</strong>{famousFilms(actress.most_famous_movies)}</span>}
            {/* se è presente il campo known_for stampo la lista dei loro film famosi */}
            {actress.known_for && <span><strong>MOST FAMOUS FILMS:</strong>{famousFilms(actress.known_for)}</span>}
            <div className="image">
                <img src={actress.image} alt={actress.name} />
            </div>
        </>
    )
}

export default MyActress