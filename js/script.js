function leerObjetoJSON() {
    var myHeaders = new Headers();
    var myInit = {
        method: "GET",
        headers: myHeaders,
        mode: "cors",
        cache: "default",
      };
    fetch('./objetos.json', myInit)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        document.getElementById('resultado').innerHTML = JSON.stringify(data);
    })
}

function getData() {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => { 
        if (response.ok) {
            return response.json();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        console.log(data);
        let htmlText = "";
        data.results.forEach(personaje => {
            htmlText = htmlText +  `<div class="personaje"><img src="${personaje.image}"><h2>${personaje.name}</h2></div>`;   
        });
        document.getElementById('resultado').innerHTML = htmlText;
    })
}

function getDataOldFashion() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://rickandmortyapi.com/api/character', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            let htmlText = "";
            data.results.forEach(personaje => {
                htmlText = htmlText +  `<div class="personaje"><img src="${personaje.image}"><h2>${personaje.name}</h2></div>`;   
            });
            document.getElementById('resultado').innerHTML = htmlText;
        }
    }
    xhr.send();
}

async function getDataAsincrono() {
    try {
          const url = "https://rickandmortyapi.com/api/character";
          const response = await fetch(url);
          if (!response.ok) {
             throw new Error('Network rickandmortyapi was not ok.');
          }
          const data = await response.json();
          console.log(data);
          let htmlText = "";
          data.results.forEach(personaje => {
              htmlText = htmlText +  `<div class="personaje"><img src="${personaje.image}"><h2>${personaje.name}</h2></div>`;   
          });
          document.getElementById('resultado').innerHTML = htmlText;
      } catch (error) {
          console.error('There was a problem with the fetch operation:', error);
          throw error;
      }
  }