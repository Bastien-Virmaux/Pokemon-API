//API CONTACT

const buttonChangePokemon = document.getElementById('newPokemon');
const imagesPokemon = document.getElementById('imagesPokemon');
const namePokemon = document.getElementById('namePokemon');
const loading = document.getElementById('loading');


const changePokemon = async () => {
  
    //GENERATE A RANDOM NUMBER FOR THE ID AND SAVE IT
    let id = (Math.floor(Math.random() * 150)) + 1; //INCLUDED BETWEEN 1 AND 151
    
    //WE ADD THE LINK
    const linkRequest = `https://pokeapi.co/api/v2/pokemon/${id}`;
  
    //REQUEST INFORMATION FROM THE SERVER AND SAVE
    let contact = await fetch(linkRequest); //PROMISE

    //TRANSFORMING THE GET INTO JSON FORMAT
    let response = await contact.json(); //json file

    //POST SERVER RESPONSES ON HTML
    imagesPokemon.src = response.sprites.front_default;
    namePokemon.innerText = response.name;   
}

//LAUNCH OF THE FUNCTION IN ORDER TO HAVE A POKEMON AS SOON AS THE SITE LOADS
changePokemon();

//CLIC RECOVERY
buttonChangePokemon.addEventListener('click', changePokemon);
