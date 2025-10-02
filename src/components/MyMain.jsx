import { useState, useEffect } from "react";


export default function MyMain() {

    const [actress, setActress] = useState([]);


    function fetchActress() {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) =>
                // setActress(res.data.results))
                console.log(res.data))
            .catch(error => console.log(error)
            )
    }

    //useEffect senza dipendenze viene richiamato solo la prima volta al caricamento della pagina

    useEffect(() => {
        fetchActress()

    }, [])

    // console.log(actress)

    return (
        <h1>Ciao a tutti</h1>
    )
}