import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { CHARACTERS } from 'core/query-keys';
import { CharactersResponse, fetchCharacters } from 'modules/characters/http';

export function useCharacters() {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(1);
  const { status, error, data } = useQuery<CharactersResponse, string>(
    [CHARACTERS, page],
    () => fetchCharacters(page),
    { keepPreviousData: true, staleTime: 8000 }
  );

  React.useEffect(() => {
    if (data?.info.next) {
      queryClient.prefetchQuery(
        [CHARACTERS, page + 1],
        () => fetchCharacters(page + 1),
        { staleTime: 8000 }
      );
    }
  }, [data, queryClient]);

  return {
    pageCount: data?.info?.pages || 1,
    items: data?.results || [],
    status,
    error,
    page,
    setPage,
  };
}
