export type Status = 'initial' | 'loading' | 'fetching' | 'error' | 'idle';

export type ListResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};
