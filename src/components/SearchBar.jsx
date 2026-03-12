
import "./SearchBar.css";
function SearchBar({ search, setSearch }) {
  return (
    <div className="SearchBar">
      <input
        type="search"
        placeholder="Buscar Pokémon"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;