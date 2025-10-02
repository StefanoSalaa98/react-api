import { useState, useEffect } from "react";
import MyActress from "./MyActress";

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
        <div className="container">
            {actresses.map(actress => (
                <div key={actress.id} className="card">
                    <MyActress
                        actress={actress}
                    />
                </div>
            ))}
        </div>
    )
}