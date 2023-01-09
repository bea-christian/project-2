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
    });

    // delete header element upon click of button
    headerElement.innerText = ('');
    
    // append name to page
    headerElement.append(pokemonInfo.name);
};

// call init method!
pokemonGenerator.init = () => {
  pokemonGenerator.getData();
};

pokemonGenerator.init();
});




