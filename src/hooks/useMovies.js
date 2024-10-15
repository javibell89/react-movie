import responseMovies from '../mocks/with-results.json';

export function useMovies() {
  const movies = responseMovies.Search;
  //Mapeamos los datos de la API para no depender de su contrato dentro de nuestro componente
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
