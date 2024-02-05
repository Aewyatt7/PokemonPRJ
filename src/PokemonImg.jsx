import React from "react";

const PokemonImg = ({ pokemon }) => {
  const typeImages = pokemon.type.map((type) => `${type}.png`);
  const weaknessImages = pokemon.weaknesses.map((weakness) => `${weakness}.png`);

  return (
    <div className="col">
      <p>{pokemon.name}</p>
      <img src={pokemon.img} alt={`Image of ${pokemon.name}`} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {pokemon.next_evolution && pokemon.next_evolution.length > 0 && (
    <p>Next Evolution: {pokemon.next_evolution[0].name}</p>
)}
       <p> Types:
        {typeImages.map((typeImg, index) => (
          <img key={index} src={typeImg} alt={`Type ${pokemon.type[index]}`} 
          style={{width:200 + "px"}}/>
        ))}
      </p>
      <p>
        Weaknesses:
        {weaknessImages.map((weaknessImg, index) => (
          <img key={index} src={weaknessImg} alt={`Weakness ${pokemon.weaknesses[index]}`} 
          style={{width: 200 + "px"}}/>
        ))}
      </p>
    </div>
  );
}

export default PokemonImg;
