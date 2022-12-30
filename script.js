
// create an pokemonGenerator object and intialize function
const pokemonGenerator = {};

// url
pokemonGenerator.url = 'https://pokeapi.co/api/v2/pokemon/';

// getData function
pokemonGenerator.getData = () => {
    // construct the URL
    const url = new URL(pokemonGenerator.url);
    url.search = new URLSearchParams({
        
    });

    // fetch from url
    fetch(url)
        .then((response) => {
            // convert to .json
            return response.json();
        })
        .then((jsonResponse) => {
            // see how the data is set up
            // save photo data to namespace object
            pokemonGenerator.photos = jsonResponse;
            
            console.log(pokemonGenerator.photos);
        })
};


// create pokemonGenerator initialize function
pokemonGenerator.init = () => {
    pokemonGenerator.getData();
}

pokemonGenerator.init();
