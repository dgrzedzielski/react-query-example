import React from 'react';
import { Status } from 'core/types';
import { fetchLocations } from 'modules/locations/http';
import { LocationModel } from 'modules/locations/types';

export function useLocations() {
  const [items, setItems] = React.useState<LocationModel[]>([]);
  const [status, setStatus] = React.useState<Status>('initial');
  const [error, setError] = React.useState<null | string>(null);
  const [page, setPage] = React.useState(1);
  const [pageCount, setPageCount] = React.useState(1);

  const fetchData = React.useCallback(async () => {
    setStatus('loading');

    try {
      const { results, info } = await fetchLocations(page);
      setItems(results);
      setStatus('idle');
      setPageCount(info.pages);
    } catch (e) {
      setError(e.error);
      setStatus('error');
    }
  }, [page]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    items,
    status,
    error,
    page,
    setPage,
    pageCount,
  };
}
