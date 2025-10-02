const MyActress = (props) => {

    const { actress } = props

    // funzione che riceve l'array con i film più famosi e ne stampa la lista
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
            {actress.most_famous_movies && <div><strong>MOST FAMOUS FILMS:</strong>{famousFilms(actress.most_famous_movies)}</div>}
            {/* se è presente il campo known_for stampo la lista dei loro film famosi */}
            {actress.known_for && <div><strong>MOST FAMOUS FILMS:</strong>{famousFilms(actress.known_for)}</div>}
            <div className="image">
                <img src={actress.image} alt={actress.name} />
            </div>
        </>
    )
}

export default MyActress