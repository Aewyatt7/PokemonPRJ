import React, { useState } from "react";

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

  const nextEvolution = pokemon.next_evolution;

  const typeClass = pokemon.type[0].toLowerCase();

  const [expanded, setExpanded] = useState(false);

  const expandActivate = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={`pokemon-card ${expanded ? "expanded" : ""}`} onClick={expandActivate}>
      <p>{pokemon.name}</p>
      <img src={pokemon.img} alt={`Image of ${pokemon.name}`} />
      <p>#{pokemon.id}</p>
        {expanded &&   
        <>
        <p>
            Height: {height.feet}' {height.inches}"
          </p>
          <p>Weight: {weight} lbs</p>
        
          {nextEvolution && nextEvolution.length > 0 && (
            <>
              <p className="types-label">Next Evolution</p>
              <div className="types">
                <p>{nextEvolution[0].name}</p>
              </div>
            </>
          )}

        <p className="types-label">Type:</p>
        <div className="types">
          {pokemon.type.map((type, index) => (
            <img key={index} src={`${type}.png`} alt={`Type ${type}`} />
          ))}
        </div>
        <p className="weaknesses-label">Weaknesses</p>
        <div className="weaknesses">
          {weaknessImages.map((weaknessImg, index) => (
            <img
              key={index}
              src={weaknessImg}
              alt={`Weakness ${pokemon.weaknesses[index]}`}
            />
          ))}
        </div>
        </>
      }
    </div>
  );
}

export default PokemonImg;
