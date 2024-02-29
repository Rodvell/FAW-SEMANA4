function init() {
}

function mostrarImagenes() {
    const lowerLimit = document.getElementById('lower_limit').value;
    const upperLimit = document.getElementById('upper_limit').value;

    if (parseInt(lowerLimit) >= parseInt(upperLimit)) {
        alert("El límite inferior debe ser menor que el límite superior.");
        return;
    }

    const showOne = document.getElementById('showOne').checked;

    const imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = '';

    if (showOne) {
        
        consultarImagen(lowerLimit);
    } else {
        
        for (let i = parseInt(lowerLimit); i <= parseInt(upperLimit); i++) {
            consultarImagen(i);
        }
    }
}

function consultarImagen(nombrePokemon) {
    /* Hacer la solicitud GET a la PokeAPI para obtener la información del Pokemon*/
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
        .then(response => response.json())
        .then(data => {
            /* Obtener la URL de la imagen del sprite de Emerald front_default*/
            const spriteUrl = data.sprites.versions["generation-iii"].emerald.front_default;

            /* Crear elemento de imagen y asignar atributos */
            const img = document.createElement('img');
            img.src = spriteUrl;
            img.alt = nombrePokemon;
            img.style.width = '100px';
            img.style.height = '100px';
            img.style.padding = '5px';

            /* Agregar imagen al contenedor */
            const imageContainer = document.getElementById('imageContainer');
            imageContainer.appendChild(img);
        })
        .catch(error => console.error('Error al obtener la imagen del Pokémon:', error));
}