$(document).ready(function() {

    $.get('https://pokeapi.co/api/v2/pokedex/1/', function(result) {
        console.log(result);
        result.pokemon_entries.forEach(function(pokemon) {
            var name = JSON.stringify(pokemon.pokemon_species.name); //al hacer stringify devuelve el nombre de 721 Pokes

            var obj = JSON.parse(name.replace(/(\{|,)\s*(.+?)\s*:/g, '$1 "$2":')); //para poder pasar el nombre sin comillas 
            //console.log(obj);
            //conseguir sprites de los pokemon

            var img = 'https://img.pokemondb.net/sprites/x-y/normal/' + obj + '.png ';

            $('.poke').append(`<div class="col s4 m4 l4 imagenes"><img src="${img}" alt=${name}></div>`);



        })
    });

});