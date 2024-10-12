import { useState, useEffect } from 'react';

export function useMovies(query) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      if (query) {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=e1e1960b&s=${query}`
        );
        const data = await response.json();
        setMovies(data.Search || []);
      }
    };

    searchMovies();
  }, [query]);

  //Mapeamos los datos de la API para no depender de su contrato dentro de nuestro componente
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }));

  return { movies: mappedMovies };
}
