export type Status = 'loading' | 'fetching' | 'error' | 'idle' | 'success';

export type ListResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
};
