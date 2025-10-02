const MyActress = (props) => {

    const { actress } = props

    return (
        <>
            <h2>{actress.name}</h2>
            <span><strong>BIRT YEAR:</strong> {actress.birth_year}</span>
            {/* se è presente, stampo anche l'anno di morte dell'attrice */}
            {actress.death_year && <span><strong>DEATH YEAR:</strong> {actress.death_year}</span>}
            <span><strong>NATIONALITY:</strong> {actress.nationality}</span>
            <span><strong>BIOGRAPHY: </strong>{actress.biography}</span>
            <span><strong>AWARDS: </strong>{actress.awards}</span>
            <div className="image">
                <img src={actress.image} alt={actress.name} />
            </div>
        </>
    )
}

export default MyActress