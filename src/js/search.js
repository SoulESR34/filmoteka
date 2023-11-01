//   al mezclar las ramas descomentar linea 2
// import { movieList, galleryFilms, renderMovies } from './gallery';

const searchform = document.querySelector('hero__SMovies--bar');

function searchFilms() {
  searchform.addEventListener('submit', e => {
    e.preventDefault();
    const form = e.target;
    const input = form.elements.search.value;
    //   al mezclar las ramas descomentar linea 11 y 12
    // movieList.innerHTML = '';
    // galleryFilms((page = 1), input);
  });
}

export { searchFilms };
// al mezclar las ramas esta funcion debe ser exportanda a index.js
