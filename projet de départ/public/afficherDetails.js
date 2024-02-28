const params = new URLSearchParams(window.location.search);
let id = params.get('id');

//remplir le formulaire avec les valeurs de l'objet correspondant
function RemplirPage(film){
    if(film.id === id){


        let titre = `<h1>${film.title}</h1>`;
        let realisateur = `<h2>${film.realisateur}</h2>`;
        let duree = `<h2>${film.duree}</h2>`;
        let description = `<p>${film.description}</p>`;
        let image = `<img src="${film.image}">`;
        document.getElementById("title").innerHTML = titre;
        document.getElementById("realisateur").innerHTML = realisateur;
        document.getElementById("duree").innerHTML = duree;
        document.getElementById("description").innerHTML = description;
        document.getElementById("image").value = image;

    }
    else{
        console.log("error");
    }

}

function RecupererTousLesFilms(id)
{
    fetch("http://localhost:3000/films/" + id)
    .then(response => response.json())
    .then(data => RemplirPage(data))
    .catch(error => console.error(error));
}

RecupererTousLesFilms(id);