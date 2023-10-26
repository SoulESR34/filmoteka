const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNWI0OWM3OGZiOWM3MzdjYzliOTY2ZTYyNGZiMzM2OCIsInN1YiI6IjY1MzljMGU3Njc4MjU5MDBjN2U4MzA1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NKkY_ulExDHUWkpgOszRCBSGMcjpe0pUHtb9dF-rIOM',
  },
};

function fetchInitalMovies() {
  return fetch(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  ).then(response => response.json());
}

export { fetchInitalMovies };
