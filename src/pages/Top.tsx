import {ChangeEvent, useState} from "react";
import {getPokemons, Pokemon} from "../pokemons";

export function Top() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setPokemons(getPokemons(e.target.value))
    　}

    return (
        <div>
            <input type="text" onChange={(e) => handleChange(e)}/>
            {
                pokemons.map(pokemon => {
                    return (
                        <p key={pokemon.name}>
                            {pokemon.name}
                        </p>
                    )
                })
            }
        </div>
    )
}
