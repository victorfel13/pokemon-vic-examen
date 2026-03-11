import "./SearchBar.css";
function SearchBar() {
  return (
    <div className="SearchBar">
      <input
        className="SearchBar__input"
        type="search"
        placeholder="Buscar Pokémon"
      />
    </div>
  );
}

export default SearchBar;