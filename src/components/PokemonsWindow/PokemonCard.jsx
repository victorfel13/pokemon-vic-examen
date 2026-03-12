import "./PokemonCard.css";

const PokemonCard = ({ pokemonData }) => {
  if (!pokemonData) return <h1>Cargando...</h1>;

  return (
    <>
    <div className="pokemonCard">
      <img
        src={pokemonData.sprites.front_default}
        alt={pokemonData.name}
        className="pokemonCard__image"
      />
      <h2 className="pokemonCard__name">{pokemonData.name}</h2>
      <p className="pokemonCard__type">
       Tipo: {pokemonData.types ? pokemonData.types[0].type.name : "Desconocido"}
      </p>
    </div>
    
    
    </>
    
  );
};

export default PokemonCard;