import './App.css';
import { useMovies } from './hooks/useMovies.js';
import { useSearch } from './hooks/useSearch.js';
import { Movies } from './components/Movies.jsx';

function App() {
  const { search, setSearch, error } = useSearch();
  const { movies } = useMovies();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(search);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            type='text'
            placeholder='Avengers, Star Wars, Batman...'
          />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
