import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonCard from "./components/PokemonsWindow/PokemonCard";
import PageChange from "./components/PokemonsWindow/PageChange";
import FooterPage from "./components/Footer";

function App() {
  // Estados
  const [pokemondata, setPokemondata] = useState([]); //data
  const [search, setSearch] = useState(""); // buscador
  const [nowPage, setNowPage] = useState(0); // página next
  const [itemsPerPage, setItemsPerPage] = useState(6);// cuantos muestra por página

  // Ajustar cartas según tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(6);
      }
    };

    handleResize(); // ejecutar al cargar
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Filtrado de datos pokemon
  const filteredPokemons = pokemondata
    .filter((pokemon) =>
      pokemon.name.toLowerCase().includes(search.toLowerCase()),
    )
   
    .map((pokemon) => ({
      ...pokemon,
      name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
    }));

  

  console.log(filteredPokemons);

  // Resetear página al cambiar la búsqueda
  useEffect(() => {
    setNowPage(0);
  }, [search]);

  // Fetch (traer datos de la api)
  const LINK_BASE = "https://pokeapi.co/api/v2/pokemon/";

  const fetchPokemons = async (id) => {
    try {
      const response = await fetch(`${LINK_BASE}${id}`);
      const data = await response.json();
      setPokemondata((prev) => [...prev, data]);
    } catch (error) {
      console.error("Error con fetch", error);
    }
  };

  const fetchAllPokemons = () => {
    for (let i = 1; i <= 2000; i++) {
      fetchPokemons(i);
    }
  };

  useEffect(() => {
    fetchAllPokemons();
  }, []);
 
  return (
    <>
      <Header />
      <SearchBar search={search} setSearch={setSearch} /> 

      <div className="PokemonWindow__container">
        {filteredPokemons.length === 0 ? (
          <h1>Cargando...</h1>
        ) : (
          filteredPokemons
            .slice(
              nowPage * itemsPerPage,
              nowPage * itemsPerPage + itemsPerPage,
            )
            .map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemonData={pokemon} />
            ))
        )}
      </div>

      <PageChange
        nowPage={nowPage}
        setNowPage={setNowPage}
        totalItems={filteredPokemons.length}
        itemsPerPage={itemsPerPage}
      />

      <FooterPage />
    </>
  );
}

export default App;
