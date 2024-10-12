// Datos de los Pokémon
const pokemones = {
    "Arbok": {
        name: "Arbok",
        image: "images/Arbok.png",
        type: "Veneno",
        height: "3.5 m",
        weight: "65 kg",
        abilities: "Intimidación, Bucle"
    },
    "Beedrill": {
        name: "Beedrill",
        image: "images/Beedrill.png",
        type: "Bicho/Veneno",
        height: "1 m",
        weight: "29.5 kg",
        abilities: "Absorbe, Foco Interno"
    },
    "Blastoise": {
        name: "Blastoise",
        image: "images/Blastoise.png",
        type: "Agua",
        height: "1.6 m",
        weight: "85.5 kg",
        abilities: "Torrente"
    },
    "Bulbasaur": {
        name: "Bulbasaur",
        image: "images/Bulbasaur.png",
        type: "Planta/Veneno",
        height: "0.7 m",
        weight: "6.9 kg",
        abilities: "Espesura, Clorofila"
    },
    "Butterfree": {
        name: "Butterfree",
        image: "images/Butterfree.png",
        type: "Bicho/Volador",
        height: "1.1 m",
        weight: "32 kg",
        abilities: "Escudo"
    },
    "Ivysaur": {
        name: "Ivysaur",
        image: "images/Ivysaur.png",
        type: "Planta/Veneno",
        height: "1 m",
        weight: "13 kg",
        abilities: "Espesura, Clorofila"
    },
    "Venusaur": {
        name: "Venusaur",
        image: "images/Venusaur.png",
        type: "Planta/Veneno",
        height: "2 m",
        weight: "100 kg",
        abilities: "Espesura, Clorofila"
    },
    "Charmander":{
        name: "Charmander",
        image: "images/Charmander.png",
        type: "Fuego",
        height: "0.6 m",
        weight: "8.5 kg",
        abilities: "Mar Llamas, Irritación"
    },
    "Charmeleon":{
        name: "Charmeleon",
        image: "images/Charmeleon.png",
        type: "Fuego",
        height: "1.1 m",
        weight: "19 kg",
        abilities: "Mar Llamas, Irritación"
    },
    "Charizard": {
        name: "Charizard",
        image: "images/Charizard.png",
        type: "Fuego/Volador",
        height: "1.7 m",
        weight: "90.5 kg",
        abilities: "Mar Llamas, Irritación"
    },
    "Squirtle": {
        name: "Squirtle",
        image: "images/Squirtle.png",
        type: "Agua",
        height: "0.5 m",
        weight: "9 kg",
        abilities: "Torrente"
    },
    "Wartortle":{
        name: "Wartortle",
        image: "images/Wartortle.png",
        type: "Agua",
        height: "1 m",
        weight: "22.5 kg",
        abilities: "Torrente"
    },
    "Pidgey": {
        name: "Pidgey",
        image: "images/Pidgey.png",
        type: "Normal/Volador",
        height: "0.3 m",
        weight: "1.8 kg",
        abilities: "Mar Llamas, Irritación"
    },
    "Pidgeotto":{
        name: "Pidgeotto",
        image: "images/Pidgeotto.png",
        type: "Normal/Volador",
        height: "1.1 m",
        weight: "30 kg",
        abilities: "Mar Llamas, Irritación"
    },
    "Pidgeot": {
        name: "Pidgeot",
        image: "images/Pidgeot.png",
        type: "Normal/Volador",
        height: "1.5 m",
        weight: "39.5 kg",
        abilities: "Mar Llamas, Irritación"
    }
};

// Función para cargar los datos del Pokémon seleccionado
function loadPokemonDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const pokemonName = urlParams.get('pokemon');
    
    if (pokemonName && pokemones[pokemonName]) {
        const pokemon = pokemones[pokemonName];

        // Mostrar los datos del Pokémon en la página
        document.getElementById('pokemon-name').textContent = pokemon.name;
        document.getElementById('pokemon-name-data').textContent = pokemon.name;
        document.getElementById('pokemon-type').textContent = pokemon.type;
        document.getElementById('pokemon-height').textContent = pokemon.height;
        document.getElementById('pokemon-weight').textContent = pokemon.weight;
        document.getElementById('pokemon-abilities').textContent = pokemon.abilities;
        document.getElementById('pokemon-img').src = pokemon.image;
    } else {
        document.getElementById('pokemon-name').textContent = "Pokémon no encontrado";
    }
}
// recarga la pagina
window.onload = loadPokemonDetails;