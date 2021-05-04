import { useIsFetching } from 'react-query';
import './base-fetching-indicator.scss';

export function BaseFetchingIndicator() {
  const isFetching = useIsFetching();

  return isFetching ? (
    <span className="base-fetching-indicator">
      <svg
        aria-hidden="true"
        className="base-fetching-indicator__circular"
        viewBox="25 25 50 50"
      >
        <circle
          className="base-fetching-indicator__path"
          cx="50"
          cy="50"
          r="20"
          fill="none"
        />
      </svg>
    </span>
  ) : null;
}
