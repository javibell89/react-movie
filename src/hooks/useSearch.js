import { useEffect, useState } from 'react';

export function useSearch() {
  const [search, setSearch] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    if (search === '') {
      setError('Debes escribir algo para buscar');
      return;
    }
    if (search.match(/^\d+$/)) {
      setError('Debes escribir algo que no sea un número');
      return;
    }
    if (search.length < 3) {
      setError('Debes escribir algo más de 3 caracteres');
      return;
    }

    setError(null);
  }, [search]);

  return { search, setSearch, error };
}
