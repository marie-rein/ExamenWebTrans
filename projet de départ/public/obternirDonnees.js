// recuperer les films

function RecupererFilms(films)
{
    for (let i = 0; i < films.length; i++)
    {
        let id = films[i].id;
        let stringDesign = `<div class="card" style="width: 18rem;">
        <img src="${films[i].image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${films[i].title}</h5>
          <p class="card-text">${films[i].realisateur}</p>
          <p class="card-text">${films[i].duree}</p>
          <p class="card-text">${films[i].description}</p>
          <a href="details.html?id=${id}" class="btn btn-primary">📖</a>
          <a href="#" class="btn btn-dark">🗑️</a>
        </div>
      </div>`;

        document.getElementById("contenuFilms").innerHTML += stringDesign;
    }
}

function TousLesFilms(){
    fetch("http://localhost:3000/films")
    .then(response => response.json())
    .then(data => RecupererFilms(data))
    .catch(error => console.error(error));

}

TousLesFilms()  
