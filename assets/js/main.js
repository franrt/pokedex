$.ajax({
        url: 'http://pokeapi.co/api/v2/pokedex/1/',
        type: 'GET',
        dataType: 'JSON',
        data: { 'limit': '811' },
    })
    .done(function(result) {

        result.pokemon_entries.forEach(function(el) {
            console.log(el.pokemon_species.name)
        });
    })
    .fail(function() {
        console.log('error')
    });