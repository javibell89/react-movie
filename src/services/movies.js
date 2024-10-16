const API_KEY = 'e1e1960b';
export const searchMovies = async ({ search }) => {
  if (search === '') {
    return null;
  }
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    );
    const json = await response.json();
    const movies = json.Search;
    //Mapeamos los datos de la API para no depender de su contrato dentro de nuestro componente
    return movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error('Error searching movies');
  }
};
