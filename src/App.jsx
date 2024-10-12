import './App.css';
import { useState } from 'react';
import { useMovies } from './hooks/useMovies.js';
import { Movies } from './components/Movies.jsx';

function App() {
  const [query, setQuery] = useState('');
  const { movies } = useMovies(query);

  const handleSubmit = (event) => {
    event.preventDefault();
    setQuery(event.target.elements.search.value);
  };

  return (
    <div className='page'>
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input
            name='search'
            type='text'
            placeholder='Avengers, Star Wars, Batman...'
          />
          <button type='submit'>Buscar</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  );
}

export default App;
