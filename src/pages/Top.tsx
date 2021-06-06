import {ChangeEvent, useState} from "react";
import {getPokemons, Pokemon} from "../pokemons";
import {
    Link
} from "react-router-dom";
export function Top() {
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setPokemons(getPokemons(e.target.value))
    }

    return (
        <div>
            <input type="text" onChange={(e) => handleChange(e)}/>
            <ul>
                {pokemons.map(pokemon =>
                    <li key={pokemon.number}>
                        <Link to={'/detail/' + pokemon.number}>
                            {pokemon.name}
                        </Link>
                    </li>

                )}
            </ul>
        </div>
    )
}
