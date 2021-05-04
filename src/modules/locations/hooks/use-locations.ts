import React from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { LOCATIONS } from 'core/query-keys';
import { fetchLocations, LocationsResponse } from 'modules/locations/http';

export function useLocations() {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(1);
  const { data, status, error } = useQuery<LocationsResponse, string>(
    [LOCATIONS, page],
    () => fetchLocations(page),
    { keepPreviousData: true, staleTime: 8000 }
  );

  React.useEffect(() => {
    if (data?.info.next) {
      queryClient.prefetchQuery(
        [LOCATIONS, page + 1],
        () => fetchLocations(page + 1),
        { staleTime: 8000 }
      );
    }
  }, [data, queryClient]);

  return {
    items: data?.results || [],
    pageCount: data?.info.pages || 1,
    status,
    error,
    page,
    setPage,
  };
}
