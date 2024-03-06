import { useState } from "react"


export function Formulario({ newLocation }) {
    const [city, setCity] = useState("");
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({ city })
        if (city === "" || !city) return;
        newLocation(city)
    }
    return (
        <div>
            <form onSubmit={onSubmit} action="" className="w-75 m-auto">
                <input className='escribir' type="text" placeholder="Search for a city..." onChange={(e) => setCity(e.target.value)} />
                <input type="submit" value="" className="buscar" />
            </form>



        </div>
    )


}