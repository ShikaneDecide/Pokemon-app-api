import { useState, useEffect } from 'react';
import './pokemon.css';


const Pokemon = () => {
const [pokemonData, setPokemonData] = useState([]);

useEffect(() => {
const fetchPokemon = async () => {
const promises = [];
for (let i = 1; i <= 50-2; i++) {
const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
promises.push(fetch(url).then((res) => res.json()));
}
const results = await Promise.all(promises);
const pokemon = results.map((result) => ({
name: result.name,
image: result.sprites['front_default'],
type: result.types.map((type) => type.type.name).join(', '),
id: result.id,
}));
setPokemonData(pokemon);
};
fetchPokemon();
}, []);

return (
<ul className="pokedex">
{pokemonData.map((pokemon) => (
<li key={pokemon.id} className="card">
<img className="card-image" src={pokemon.image} alt={pokemon.name}/>
<h2 className="card-title">{pokemon.name}</h2>
<p className="card-subtitle">Type: {pokemon.type}</p>
</li>
))}
</ul>
);
};

export default Pokemon;