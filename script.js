const poke_container = document.getElementById('poke_container');
const image = document.getElementById("pokiImage");
const pokemons_number = 50;

const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async id => {
	try{
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
	createPokemonCard(pokemon);
    console.log(pokemon);
} catch (error) {
    console.log(error);
  }
};

function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');

    //Display around 50 pokemons.
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	console.log(name);


	 //Each pokemon’s ability needs to be listed.
	const poke_abilities = pokemon.abilities.map(ability =>ability.ability.name);
	console.log(poke_abilities[0]);


     //Display the pokemon’s moves.
	 const moves = pokemon.moves.map(move =>move.move.name);
	 console.log(moves[0]);

	  //Also display the weight of each pokemon.
	  const weight= pokemon.weight;
	 console.log(weight);
	
		const pokeInnerHTML = `
		<div class="img-container">
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            pokemon.id
        }.png" alt="${name}" />
        </div>
        <div>
            <h2 class="name"> ${name}</h2>
        </div>
		<div><b>Poke_Ability:</b> ${poke_abilities[0]}</div>
		<div><b>Poke_Moves:</b> ${moves[0]}</div>
		<div><b>Poke_Weight:</b> ${weight}</div> `;

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
}

fetchPokemons();