import React from "react";

function PokemonImg({ pokemon }) {
  const convertMetricsToImperial = (heightInMeters, weightInKg) => {
    const heightInFeet = Math.floor(heightInMeters * 3.28084);
    const remainingInches = Math.round((heightInMeters * 39.3701) % 12);
    const weightInLbs = Math.round(weightInKg * 2.20462);

    return {
      height: { feet: heightInFeet, inches: remainingInches },
      weight: weightInLbs,
    };
  };

  const { height, weight } = convertMetricsToImperial(
    parseFloat(pokemon.height.replace(" m", "")),
    parseFloat(pokemon.weight.replace(" kg", ""))
  );

  const typeImages = pokemon.type.map((type) => `${type}.png`);
  
  const weaknessImages = pokemon.weaknesses.map(
    (weakness) => `${weakness}.png`
  );

  return (
    <div className={`pokemon-card ${pokemon.type[0].toLowerCase()}`}>
      <p>{pokemon.name}</p>
      <img src={pokemon.img} alt={`Image of ${pokemon.name}`} />
      <p>
        Height: {height.feet}' {height.inches}"
      </p>
      <p>Weight: {weight} lbs</p>
      <p>
        Type:
        {typeImages.map((typeImg, index) => (
          <img key={index} src={typeImg} alt={`Type ${pokemon.type[index]}`} />
        ))}
      </p>
      <p>
        Weaknesses:
        {weaknessImages.map((weaknessImg, index) => (
          <img key={index} src={weaknessImg} alt={`Weakness ${pokemon.weaknesses[index]}`} />
        ))}
      </p>
    </div>
  );
}

export default PokemonImg;
