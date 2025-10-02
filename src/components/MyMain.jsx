import { useState, useEffect } from "react";
import MyActress from "./MyActress";

export default function MyMain() {

    //variabile di stato per le attrici
    const [actresses, setActresses] = useState([]);
    //variabile di stato per gli attori
    const [actors, setActors] = useState([]);

    // funzione che prende i dati delle attrici dall'API
    function fetchActresses() {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) =>
                setActresses(res.data))
            .catch(error => console.log(error)
            )
    }

    // funzione che prende i dati degli attori dall'API
    function fetchActors() {
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => setActors(res.data))
            .catch(error => console.log(error))
    }

    //useEffect senza dipendenze viene richiamato solo la prima volta al caricamento della pagina
    useEffect(() => {
        fetchActresses()
        fetchActors()

    }, [])

    //unisco le liste degli attori e delle attrici
    const fusionList = [...actors, ...actresses]

    return (
        <>
            {/* scorrso l'array actress e stampo le card attrici */}
            <div className="container">
                {actresses.map(actress => (
                    <div key={actress.id} className="card woman">
                        <MyActress
                            actress={actress}
                        />
                    </div>
                ))}
            </div>
            {/* scorrso l'array actors e stampo le card attori */}
            <div className="container">
                {actors.map(actor => (
                    <div key={actor.id} className="card man">
                        <MyActress
                            actress={actor}
                        />
                    </div>
                ))}
            </div>
            {/* <div className="container">
                {fusionList.map(person => (
                    <div key={person.id} className="card">
                        <MyActress
                            actress={person}
                        />
                    </div>
                ))}
            </div> */}
        </>
    )
}