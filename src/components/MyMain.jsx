import { useState, useEffect } from "react";
import MyActress from "./MyActress";

export default function MyMain() {

    //variabile di stato per le attrici
    const [actresses, setActresses] = useState([]);
    //variabile di stato per gli attori
    const [actors, setActors] = useState([]);


    function fetchActresses() {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) =>
                setActresses(res.data))
            .catch(error => console.log(error)
            )
    }

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

    const fusionList = [...actors, ...actresses]
    console.log(fusionList);


    return (
        <>
            {/* <div className="container">
                {actresses.map(actress => (
                    <div key={actress.id} className="card woman">
                        <MyActress
                            actress={actress}
                        />
                    </div>
                ))}
            </div>
            <div className="container">
                {actors.map(actor => (
                    <div key={actor.id} className="card man">
                        <MyActress
                            actress={actor}
                        />
                    </div>
                ))}
            </div> */}
            <div className="container">
                {fusionList.map(person => (
                    <div key={person.id} className="card">
                        <MyActress
                            actress={person}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}