async function getRickAndMortyCharacters() {
    const { results } = await fetch('https://rickandmortyapi.com/api/character').then((res) => res.json())
    let data = []
    for (result of results) {
        if (result.id === 1 || result.id === 2 || result.id === 3 || result.id === 4 || result.id === 5) {
            let object = {
                nome: result.name,
                genero: result.gender,
                avatar: result.image,
                especie: result.species
            }
            data.push(object)
        }
    }
    console.log(data)
}

getRickAndMortyCharacters()
