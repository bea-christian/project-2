// create an pokemonGenerator object and intialize function
const pokemonGenerator = {};

// event listener
const button = document.querySelector('button');

button.addEventListener('click', function(event) {
console.log(event);

// API url
  pokemonGenerator.url = "https://pokeapi.co/api/v2/pokemon/";

  // create a getData function
  pokemonGenerator.getData = () => {
    // construct the url
    const url = new URL(pokemonGenerator.url);
    url.search = new URLSearchParams({
      url: "url",
      limit: 248,
    });

    // fetch from url
    fetch(url)
      .then((response) => {
        // convert to .json
        return response.json();
      })
      .then((jsonData) => {
        // save data to namespace object
        pokemonGenerator.data = jsonData;
        // call function to display names
        pokemonGenerator.displayPokemon();

        console.log(pokemonGenerator.data);
      });
  };

  // displayPokemon();
  pokemonGenerator.displayPokemon = () => {
    console.log('display pokemon')
    // select header
    const headerElement = document.querySelector('h1');

    // select image
    const imgElement = document.querySelector('.pokemonImage')

    // select weight
    const weightElement = document.querySelector('.weight');

    // select height
    const heightElement = document.querySelector('.height');

    // select hp
    const hpElement = document.querySelector('.hp');

    // select attack
    const attackElement = document.querySelector('.attack');

    // select defense
    const defenseElement = document.querySelector('.defense');

    // get random name and image from namespace object
    const pokemonInfo = pokemonGenerator.data.results[Math.floor(Math.random() * 248 + 1)];

    console.log(pokemonInfo);

    // fetching more data from random pokemon
    const newURL = "https://pokeapi.co/api/v2/pokemon/" + pokemonInfo.name;

    fetch(newURL)
      .then((response) => {
        // convert to .json
        return response.json();
      })
      .then((jsonData) => {
        pokemonGenerator.data2 = jsonData;
        console.log(pokemonGenerator.data2);

        // append image to page
        // target img src
      imgElement.src = pokemonGenerator.data2.sprites.front_default;

        // target img alt
      imgElement.alt = pokemonGenerator.data2.name;

        // append img to page
      imgElement.append();

      // append weight to page
      weightElement.append('weight: ',pokemonGenerator.data2.weight,' lbs');

      // append height to page
      heightElement.append('height: ', pokemonGenerator.data2.height, ' feet');

      // append hp to page
      hpElement.append('hp: ',pokemonGenerator.data2.stats[0].base_stat);

      // append attack to page
      attackElement.append('attack: ', pokemonGenerator.data2.stats[1].base_stat);

      // append hp to page
      defenseElement.append('defense: ', pokemonGenerator.data2.stats[2].base_stat);

    });

    // delete header element upon click of button
    headerElement.innerText = ('');

    // delete weight element upon click of button
    weightElement.innerText = ('');

    // delete height element upon click of button
    heightElement.innerText = ('');

    // delete hp element upon click of button
    hpElement.innerText = ('');

    // delete attack element upon click of button
    attackElement.innerText = ('');

    // delete defense element upon click of button
    defenseElement.innerText = ('');

    // append name to page
    headerElement.append(pokemonInfo.name);
    
};

// call init method!
pokemonGenerator.init = () => {
  pokemonGenerator.getData();
};

pokemonGenerator.init();
});




