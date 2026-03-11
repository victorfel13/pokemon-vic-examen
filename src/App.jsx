import { useEffect, useState } from "react";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import PokemonWindow from "./components/PokemonsWindow/PokemonWindow";
import PageChange from "./components/PokemonsWindow/PageChange";

function App() {
// estados
  const [pokemondata, setPokemondata] = useState(null);

  // link para bajar los datos de la api
  const LINK_BASE = "https://pokeapi.co/api/v2/pokemon/"; //

  // fetch 
  const fetchPokemons = async (id) => {
    try {
      const response = await fetch(`${LINK_BASE}${id}`); //link y el id
      const data = await response.json(); // convertir en en jason
      console.log(data); //ver si funciona
      setPokemondata(data)
    } catch (error) {
      console.error("error con fetch"); //si no funciona muestra este mensaje
    }
  };

  useEffect(() => {
    fetchPokemons(6);
  }, []); 
  // aqui termina el fetch

  return (
    <>
      <Header />
      <SearchBar />
      <PokemonWindow />
      <PageChange />

    
    </>
  );
}

export default App;