import { fetchInitalMovies } from './topFilms.js';

const urlImg = 'https://image.tmdb.org/t/p/original/';

const movieList = document.querySelector('ul.movie__list');

fetchInitalMovies()
  .then(response => {
    console.log(response);
    const movieArray = response.results;
    console.log(movieArray);

    const movieMarkup = movieArray
      .map(({ id, title, poster_path, release_date }) => {
        const date = new Date(release_date);
        const year = date.getFullYear();
        return `<li class="movie__item" data-id ="${id}" >
              <img
                class="movie__poster"
                src= "${urlImg}${poster_path}"
                alt="${title}"
              />
              <div class="movie__info">
                <h2 class="movie__title">${title}</h2>
                <p class="movie__details">Drama,action | ${year}</p>
              </div>
            </li>`;
      })
      .join('');

    movieList.insertAdjacentHTML('beforeend', movieMarkup);
  })
  .catch(err => console.error(err));

function renderMovies() {}
