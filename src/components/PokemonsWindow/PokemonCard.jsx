import "./PokemonCard.css";


const PokemonCard = ({ name, image, type }) => {
  return (
    <div className="pokemonCard">
      <img src={image} alt={name} className="pokemonCard__image" />

      <h2 className="pokemonCard__name">{name}</h2>

      <p className="pokemonCard__type">{type}</p>
    </div>
  );
};

export default PokemonCard;