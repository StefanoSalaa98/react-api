import { useState, useEffect } from "react";


export default function MyMain() {

    const [actresses, setActresses] = useState([]);


    function fetchActresses() {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) =>
                setActresses(res.data))
            .catch(error => console.log(error)
            )
    }

    //useEffect senza dipendenze viene richiamato solo la prima volta al caricamento della pagina

    useEffect(() => {
        fetchActresses()
    }, [])


    return (
        actresses.map(actress => (
            <div key={actress.id}>
                <h2>{actress.name}</h2>
                <p>{actress.birth_year}</p>
                <p>{actress.nationality}</p>
                <p>{actress.biography}</p>
                <p>{actress.awards}</p>
                <div>
                    <img src={actress.image} alt={actress.name} />
                </div>
            </div>
        ))
    )
}