//inserer un film dans la base de donnees

function AjouterFilm() {
    const title = document.getElementById("title");
    const realisateur = document.getElementById("realisateur");
    const duree = document.getElementById("duree");
    const description = document.getElementById("description");
    const image = document.getElementById("image");
    
    const film = {
        title: title.value,
        realisateur: realisateur.value,
        duree: duree.value,
        description: description.value,
        image: image.value
    };
    
    fetch("http://localhost:3000/films", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(film)
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

$( function() {
    $( document ).tooltip();
  } );

//on button clicked

document.getElementById("ajouter").addEventListener("click", AjouterFilm);


