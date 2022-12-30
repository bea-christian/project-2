// create an pokemonGenerator object and intialize function
const pokemonGenerator = {};

pokemonGenerator.name = [];

pokemonGenerator.photo = [];

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

// displayData();
pokemonGenerator.displayPokemon = () => {
    console.log('display pokemon')
    // select header
    const headerElement = document.querySelector("h1");
    const pokemonName = pokemonGenerator.data.results[Math.floor(Math.random() * 248 +1)];

    console.log(pokemonName);
    // get name from namespace object


//   pokemonGenerator.data.forEach ( (name) => {
//     console.log(name);
//   });
  // loop through object and append name to header

};

// select the image

// get data from namespace object

// loop thru data

// create a dropdownElement

// create headerElement

// create imageElement

// create randomizeButton

// set value of dropdownElement

// set value of headerElement

// set value of imageElement

// set value of randomizeButton

// append array of pokemon to dropdownElement

// append pokemon name to headerElement

// append image to imageElement

// append data to page from randomizeButton on click

// call init method!

pokemonGenerator.init = () => {
  pokemonGenerator.getData();
};

pokemonGenerator.init();
