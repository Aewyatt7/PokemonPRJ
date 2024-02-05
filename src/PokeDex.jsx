import React, { useState, useEffect } from "react";
import PokemonImg from "./PokemonImg";
import "./index.css"; 

const PokeDex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedType, setSelectedType] = useState("All");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");
        const data = await response.json();

        const results = data.pokemon;

        const detailedPokemonList = results.map((pokemon) => ({
          id: pokemon.id,
          num: pokemon.num,
          name: pokemon.name,
          img: pokemon.img,
          type: pokemon.type,
          height: pokemon.height,
          weight: pokemon.weight,
          weaknesses: pokemon.weaknesses,
          next_evolution: pokemon.next_evolution || [],
          prev_evolution: pokemon.prev_evolution || [],
        }));

        setPokemonList(detailedPokemonList);
      } catch (error) {
        console.error("Error gathering data:", error);
      }
    };

    fetchData();
  }, []);

  const pokemonType = () => {
    const allTypes = Array.from(new Set(pokemonList.flatMap((pokemon) => pokemon.type)));
    return ["All", ...allTypes];
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const filteredPokemonList = pokemonList.filter((pokemon) =>
    selectedType === "All" || pokemon.type.includes(selectedType)
  );

  return (
      <div>
        <div>
          <h1>List of Pokémon:</h1>
          <label>
            Pokemon Type:
            <select value={selectedType} onChange={(event) => handleTypeChange(event.target.value)}>
              {pokemonType().map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="row">
          {filteredPokemonList.map((pokemon, index) => (
            <div key={index} className="pokemon-card">
              <PokemonImg pokemon={pokemon} />
            </div>
          ))}
        </div>
      </div>
    );
  }
  

export default PokeDex;
