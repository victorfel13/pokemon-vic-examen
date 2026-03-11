import React from 'react'
import "./PokemonWindow.css"
import PokemonCard from './PokemonCard'

const PokemonWindow = () => {
  return (

    <>
    <div className='PokemonWindow__container'>
<PokemonCard
name="bulbasaur"
  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  type="grass"
/>
<PokemonCard
name="bulbasaur"
  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  type="grass"
/>
<PokemonCard
name="bulbasaur"
  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  type="grass"
/>
<PokemonCard
name="bulbasaur"
  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  type="grass"
/>
<PokemonCard
name="bulbasaur"
  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  type="grass"
/>

<PokemonCard
name="bulbasaur"
  image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  type="grass"
/>


    </div>
    </>
    
  )
}

export default PokemonWindow